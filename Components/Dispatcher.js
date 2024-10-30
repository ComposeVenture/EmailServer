const TOKENIZATION = (EMAIL, LINK, AMOUNT) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
        "consumer_key": "vvOhTSA4GBwtE6qkMuVq8hwNXMHOLxaO",
        "consumer_secret": "28GnlDzP3k/JkdAmUCgEkU8RD7k="
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        mode:"no-cors",
        body: raw,
        redirect: 'follow'
    };

    fetch("https://pay.pesapal.com/v3/api/Auth/RequestToken/", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            REQUESTAPI(result.token, EMAIL, LINK, AMOUNT);
        })
        .catch(error => console.log('Error:', error));
}

const REQUESTAPI = (TOKEN, EMAIL, LINK, AMOUNT) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + TOKEN);

    RANDOMCODE((code) => {
        const raw = JSON.stringify({
            "url": "https://composeventure.github.io/Compose-Pay/" + code,
            "ipn_notification_type": "GET",
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            mode: "cors"
        };

        fetch('https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN/', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                PROCESSAPI(result, TOKEN, EMAIL, LINK, AMOUNT);
            })
            .catch(error => console.log('Error:', error));
    });
}

const PROCESSAPI = (RESULT, TOKEN, EMAIL, LINK, AMOUNT) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + TOKEN);

    var raw = JSON.stringify({
        "id": RESULT.ipn_id,
        "currency": "USD",
        "amount": AMOUNT,
        "description": "Payment description goes here",
        "callback_url": LINK,
        "notification_id": RESULT.ipn_id,
        "billing_address": {
            "email_address": EMAIL,
            "phone_number": "",
            "country_code": "",
            "first_name": "E-corp Company Group",
            "middle_name": "",
            "last_name": "",
            "line_1": "",
            "line_2": "",
            "city": "",
            "state": "",
            "postal_code": null,
            "zip_code": null
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest/', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            STORE('', 'PaymentLink', result.redirect_url);
        })
        .catch(error => console.log('Error:', error));
}
