function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

async function execute() {
    const res1 = await wearPPE();
    console.log(res1);
    const res2 = await fightCorona()
    console.log(res2);
}

execute();
