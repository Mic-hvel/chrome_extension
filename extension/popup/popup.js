const btnPrompt = document.querySelector("#btn-prompt")
const btnRender = document.querySelector("#btn-render")

btnPrompt.addEventListener('click', async() => {
    //console.log("Prompting to ChatGPT")
    const [currentTab] = await chrome.tabs.query({active: true, currentWindow: true})
    await chrome.tabs.sendMessage(currentTab.id, {hello: "world", message: "prompting to ChatGPT"})
})

btnRender.addEventListener('click', e => {
    console.log('rendering math in ChatGPT')
})
