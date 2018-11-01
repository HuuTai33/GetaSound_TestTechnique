/* When B2B is selected */
function functionB2BSelect() {
    var x = document.getElementById("B2BSelect");
    var y = document.getElementById("B2CSelect");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (x.style.display === "block") {
        document.getElementById("buttonB2B").style.borderColor = "blue";
    } else {
        document.getElementById("buttonB2B").style.borderColor = "white";
        document.getElementById("buttonEntreprise").style.borderColor = "white";
        document.getElementById("buttonAssociation").style.borderColor = "white";
        document.getElementById("buttonPublic").style.borderColor = "white";
        document.getElementById("buttonAutres").style.borderColor = "white";
        document.getElementById('counter-textB2B').value = "";
        document.getElementById('counter-words-B2B').innerHTML = 123;
        document.getElementById('counter-words-B2B').style.color = 'blue';
        document.getElementById('counter-words2-B2B').style.color = 'blue';
    }

    y.style.display = 'none';
    document.getElementById("buttonB2C").style.borderColor = "white";
    document.getElementById("buttonHomme").style.borderColor = "white";
    document.getElementById("buttonFemme").style.borderColor = "white";
    document.getElementById("buttonAutre").style.borderColor = "white";
    document.getElementById('counter-textB2C').value = "";
    document.getElementById('counter-words-B2C').innerHTML = 123;
    document.getElementById('counter-words-B2C').style.color = 'blue';
    document.getElementById('counter-words2-B2C').style.color = 'blue';
}

/* Buttons B2B */
function functionEntrepriseSelect() {
    document.getElementById("buttonEntreprise").style.borderColor = "blue";
    document.getElementById("buttonAssociation").style.borderColor = "white";
    document.getElementById("buttonPublic").style.borderColor = "white";
    document.getElementById("buttonAutres").style.borderColor = "white";
}
function functionAssociationSelect() {
    document.getElementById("buttonAssociation").style.borderColor = "blue";
    document.getElementById("buttonEntreprise").style.borderColor = "white";
    document.getElementById("buttonPublic").style.borderColor = "white";
    document.getElementById("buttonAutres").style.borderColor = "white";
}
function functionPublicSelect() {
    document.getElementById("buttonPublic").style.borderColor = "blue";
    document.getElementById("buttonEntreprise").style.borderColor = "white";
    document.getElementById("buttonAssociation").style.borderColor = "white";
    document.getElementById("buttonAutres").style.borderColor = "white";
}
function functionAutresSelect() {
    document.getElementById("buttonAutres").style.borderColor = "blue";
    document.getElementById("buttonEntreprise").style.borderColor = "white";
    document.getElementById("buttonAssociation").style.borderColor = "white";
    document.getElementById("buttonPublic").style.borderColor = "white";
}

/* Counter B2B */
counterB2B = function() {
    var value = $('textarea#counter-textB2B').val();

    if (value.length === 0) {
        $('span#counter-words-B2B').html(123);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = 123 - value.trim().replace(regex, ' ').split(' ').length;

    $('span#counter-words-B2B').html(wordCount);

    if (wordCount < 0)
    {
        document.getElementById('counter-words-B2B').style.color = 'red';
        document.getElementById('counter-words2-B2B').style.color = 'red';
    } else {
        document.getElementById('counter-words-B2B').style.color = 'blue';
        document.getElementById('counter-words2-B2B').style.color = 'blue';
    }
};
jQuery(document).ready(function($) {
    $('textarea#counter-textB2B').val('');

    $('textarea#counter-textB2B').change(counterB2B);
    $('textarea#counter-textB2B').keydown(counterB2B);
    $('textarea#counter-textB2B').keypress(counterB2B);
    $('textarea#counter-textB2B').keyup(counterB2B);
    $('textarea#counter-textB2B').blur(counterB2B);
    $('textarea#counter-textB2B').focus(counterB2B);
});

/* When B2C is selected */
function functionB2CSelect() {
    var x = document.getElementById("B2CSelect");
    var y = document.getElementById("B2BSelect");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (x.style.display === "block") {
        document.getElementById("buttonB2C").style.borderColor = "blue";
    } else {
        document.getElementById("buttonB2C").style.borderColor = "white";
        document.getElementById("buttonHomme").style.borderColor = "white";
        document.getElementById("buttonFemme").style.borderColor = "white";
        document.getElementById("buttonAutre").style.borderColor = "white";
        document.getElementById('counter-textB2C').value = "";
        document.getElementById('counter-words-B2C').innerHTML = 123;
        document.getElementById('counter-words-B2C').style.color = 'blue';
        document.getElementById('counter-words2-B2C').style.color = 'blue';
    }

    y.style.display = 'none';
    document.getElementById("buttonB2B").style.borderColor = "white";
    document.getElementById("buttonEntreprise").style.borderColor = "white";
    document.getElementById("buttonAssociation").style.borderColor = "white";
    document.getElementById("buttonPublic").style.borderColor = "white";
    document.getElementById("buttonAutres").style.borderColor = "white";
    document.getElementById('counter-textB2B').value = "";
    document.getElementById('counter-words-B2B').innerHTML = 123;
    document.getElementById('counter-words-B2B').style.color = 'blue';
    document.getElementById('counter-words2-B2B').style.color = 'blue';
}

/* Buttons B2C */
function functionHommeSelect() {
    document.getElementById("buttonHomme").style.borderColor = "blue";
    document.getElementById("buttonFemme").style.borderColor = "white";
    document.getElementById("buttonAutre").style.borderColor = "white";
}
function functionFemmeSelect() {
    document.getElementById("buttonFemme").style.borderColor = "blue";
    document.getElementById("buttonHomme").style.borderColor = "white";
    document.getElementById("buttonAutre").style.borderColor = "white";
}
function functionAutreSelect() {
    document.getElementById("buttonAutre").style.borderColor = "blue";
    document.getElementById("buttonHomme").style.borderColor = "white";
    document.getElementById("buttonFemme").style.borderColor = "white";
}

/* Counter B2C */
counterB2C = function() {
    var value = $('textarea#counter-textB2C').val();

    if (value.length === 0) {
        $('span#counter-words-B2C').html(123);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = 123 - value.trim().replace(regex, ' ').split(' ').length;

    $('span#counter-words-B2C').html(wordCount);

    if (wordCount < 0)
    {
        document.getElementById('counter-words-B2C').style.color = 'red';
        document.getElementById('counter-words2-B2C').style.color = 'red';
    } else {
        document.getElementById('counter-words-B2C').style.color = 'blue';
        document.getElementById('counter-words2-B2C').style.color = 'blue';
    }
};
jQuery(document).ready(function($) {
    $('textarea#counter-textB2C').val('');

    $('textarea#counter-textB2C').change(counterB2C);
    $('textarea#counter-textB2C').keydown(counterB2C);
    $('textarea#counter-textB2C').keypress(counterB2C);
    $('textarea#counter-textB2C').keyup(counterB2C);
    $('textarea#counter-textB2C').blur(counterB2C);
    $('textarea#counter-textB2C').focus(counterB2C);
});