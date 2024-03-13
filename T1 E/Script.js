var answer = prompt("Do you fly? (yes/no)");

if (answer.toUpperCase() == "YES") {
    var wildAnswer = prompt("Are you wild? (yes/no)");

    if (wildAnswer.toUpperCase() == "YES") {
        alert("Eagle!");
    } else if (wildAnswer.toUpperCase() == "NO") {
        alert("Parrot!");
    } else {
        alert("Answer only yes or no");
    }

} else if (answer.toUpperCase() == "NO") {
    var seaAnswer = prompt("Do you live under the sea? (yes/no)");

    if (seaAnswer.toUpperCase() == "YES") {
        var wildAnswer = prompt("Are you wild? (yes/no)");

        if (wildAnswer.toUpperCase() == "YES") {
            alert("Whale!");
        } else if (wildAnswer.toUpperCase() == "NO") {
            alert("Dolphin!");
        } else {
            alert("Answer only yes or no");
        }

    } else if (seaAnswer.toUpperCase() == "NO") {
        var wildAnswer = prompt("Are you wild? (yes/no)");

        if (wildAnswer.toUpperCase() == "YES") {
            alert("Lion!");
        } else if (wildAnswer.toUpperCase() == "NO") {
            alert("Cat!");
        } else {
            alert("Answer only yes or no");
        }

    } else {
        alert("Answer only yes or no");
    }

} else {
    alert("Answer only yes or no");
}
