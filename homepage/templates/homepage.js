/*function game(user_input) {
    let win_streak = 0;
    let answer = "";
    while (true) {
        const choice_list = ["rock", "paper", "scissor"];
        const bot_choice = choice_list[Math.floor(Math.random() * choice_list.length)];
        if (user_input === "rock" && bot_choice === choice_list[2]) {
            win_streak++;
            answer = "win";
        } else if (user_input === "paper" && bot_choice === choice_list[0]) {
            win_streak++;
            answer = "win";
        } else if (user_input === "scissor" && bot_choice === choice_list[1]) {
            win_streak++;
            answer = "win";
        } else if (user_input === bot_choice) {
            answer = "draw";
        } else {
            answer = "loss";
            win_streak = 0;
        }
        return answer;
    }
}*/