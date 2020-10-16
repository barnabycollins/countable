# Countable
🤖 Countable is small, robust(-ish) Discord bot to support and manage a counting channel in your server!

[![DeepScan grade](https://deepscan.io/api/teams/11357/projects/14263/branches/260846/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11357&pid=14263&bid=260846)

***

## How to use
### Self-hosted
I'd recommend hosting an instance of this bot yourself, because the server I've got mine running on isn't really designed for a huge number of guilds.

First off, you need to create a bot user to run this client from. [**Here's a good guide**](https://discordjs.guide/preparations/setting-up-a-bot-application.html) on how to do this!

From here on out, these instructions will assume you've got a server set up or are planning on running the bot from your current computer.

1. **Clone the repo**
```zsh
git clone https://github.com/silverben10/countable.git
```

2. **`cd` into the newly created directory**
```zsh
cd countable
```

3. **Install dependencies**
```zsh
npm install
```
or
```zsh
yarn install
```

4. **Create a `config.json` file** in the root of the project directory. Place the *Client ID* and *Client Token* from the bot application into it like so:
```json
{
	"CLIENT_ID": "ID goes here",
	"CLIENT_TOKEN": "token goes here"
}
```

5. (Optional) You should be able to quickly test that everything's been set up correctly so far by typing the following:
```zsh
node index.js
```
Come to think of it, it probably won't work because you haven't added the bot to any servers yet. Follow [**this guide**](https://discordjs.guide/preparations/adding-your-bot-to-servers.html) on how to get that done!

6. **Get the bot running permanently**  
Cool, nearly there! The last thing you'll probably want to do is get the bot running using some kind of process manager so it's not sitting there in a terminal window taking up precious screen real estate. I'd recommend using PM2 (literally only because that's what *I* first found and decided to use).  
Courtesy of discordjs.guide *again*, [**here's a good set of instructions**](https://discordjs.guide/improving-dev-environment/pm2.html#installation) on how to set *that* up!

### Grab an invite link from me
If you *really* don't want to or can't self-host this bot yourself, it's worth giving me a ping on Discord and seeing if you can invite my instance to your server.

💬 You can get in touch with me here: `poisonwasp#5284`