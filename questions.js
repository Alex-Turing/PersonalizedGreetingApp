function initiateUserInteraction(){
    var { 
        name, name_question, name_alert, name_msg, 
        city, city_question, city_alert, city_msg, 
        favorite_programming_language, language_question, language_alert, prg_msg, 
        age, age_question, age_alert, age_msg 
    } = initializeUserData();
    
    name = validateStringInput(name, name_question, name_alert);
    name_msg = `¡Hello ${name},`;

    city = validateStringInput(city, city_question, city_alert);
    city_msg = `you are from ${city}`;
    
    favorite_programming_language = validateStringInput(favorite_programming_language, language_question, language_alert);
    prg_msg = `you are learning ${favorite_programming_language}!`;

    age = validateAgeInput(age, age_question, age_alert);
    age_msg = `you are ${age} years old and`;
    
    alert(`${name_msg} ${city_msg} ${age_msg} ${prg_msg}`);

    assessStudyEnjoyment(favorite_programming_language);
}

function assessStudyEnjoyment(favorite_programming_language) {
    const msg = `Are you having a good time studying ${favorite_programming_language}?. \nType 1 for YES or type 2 for NO`;
    let like;
    let answer = null;
    do{
        like = prompt(msg);
        const like_number = parseInt(like, 10);
        if(isNaN(like_number) || (like_number !== 1 && like_number !== 2)){
            alert('Invalid option. Type 1 for YES or type 2 for NO');
            answer = null;
        }
        else{
            answer = like_number;
        }
    } while(answer === null);
    if(answer === 1){
        alert('Very good! keep studiyng, you are doing great!');
    }
    else{
        alert('Oh, what a shame... Have you tried learning other languages?');
    }
}

function initializeUserData() {
    let city;
    const city_question = "Which city are you from?";
    const city_alert = "Please enter the city you are from.";
    let city_msg;

    let favorite_programming_language;
    const language_question = "Which programming language are you currently studying?";
    const language_alert = "Please enter the programming language you are currently studying";
    let prg_msg;

    let name;
    const name_question = "What is your name?";
    const name_alert = "Please enter your name.";
    let name_msg;

    let age;
    const age_question = "How old are you?";
    const age_alert = "Please enter a valid positive number for age.";
    let age_msg;

    return { name, name_question, name_alert, name_msg, city, city_question, city_alert, city_msg, favorite_programming_language, language_question, language_alert, prg_msg, age, age_question, age_alert, age_msg };
}

function validateStringInput(answer, question, alert_msg) {
    do {
        answer = prompt(question);
        if (answer == null || answer.trim().length == 0)
            alert(alert_msg);
    }
    while (answer == null || answer.trim().length === 0);
    return answer;
}

function validateAgeInput(answer, question, alert_msg){
    do{
        answer = prompt(question);
        const number = parseInt(answer, 10);
        if(isNaN(number) || answer <= 0){
            alert(alert_msg);
            answer = null;
        }
        else{
            answer = number;
        }
    } while(answer === null);

    return answer;
}

