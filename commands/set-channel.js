module.exports = {
  name: "set-channel",
  description:
    "Sets the ID of the counting channel to the ID provided by the user.",
  args: true,
  guildOnly: true,
  ownerOnly: true,
  usage: "<channel ID>",
  execute(message, args) {
    const guildChannels = message.guild.channels.cache;

    console.log(args[0]);

    if (guildChannels.has(args[0])) {
      message.client.settings.set(
        message.guild.id,
        args[0],
        "countingChannelID",
      );
      message.channel.send(
        `The counting channel has been updated and set to ${message.client.settings.get(
          message.guild.id,
          "countingChannelID",
        )}`,
      );
    } else {
      message.channel.send(
        "I couldn't find that channel in this server. Make sure the ID is correct...",
      );
    }
  },
};
