const Box = require("@m6s/box")

module.exports = async (arg) => {
    let rst = "";
    let msg = "";

    rst += (msg = `ping to ${arg}...`);
    console.log(msg)

    const pong = await Box.invoke(arg);

    rst += (msg = `pong from ${arg}: ${pong}`);
    console.log(`pong from ${arg}: ${pong}`);

    return rst;
}
