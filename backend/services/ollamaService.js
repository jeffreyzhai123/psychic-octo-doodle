import ollama from 'ollama'

//dont use chat function -> too verbose and keeps track of chat history prompting the LLM to 
//generate different response each time despite being given same input
export async function callChat(userInput) {
    //try catch for error handling
    try {
        //using ollama library function to abstract away url formatting 
        //chat retains message history (could use generate instead)
        const response = await ollama.chat({
            model: 'llama3',
            //must be in array format for messages
            messages: [{
                role: 'user',
                content: "Generate a javascript function using the description: " + userInput + ". Name this function TestFunction"
            }]
        });
        return response.message.content;

    } catch (error) {
        console.error('Error: ', error.message);
        throw error;
    } 
}