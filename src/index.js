

class ChatGPTExtension {

    constructor() {
        this.handleRequest()
    }

    handleRequest() {
        chrome.runtime.onMessage.addListener( async (request, sender, response) => {
            if(request.action == "PROMPT") {
                this.promptToChatGPT()
            }
            console.log(request)
        })
    }

    promptToChatGPT() {
        const prompt = "From now on, if you need to write a mathematical expression, use Katex notation"
        const input = document.querySelector("#prompt-textarea")
        console.log(input)
    }

}

const CGPTExtension = new ChatGPTExtension();



