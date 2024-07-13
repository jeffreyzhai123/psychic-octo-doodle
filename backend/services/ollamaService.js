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
                content: "Generate a javascript function using the description: " + userInput + ". Name this function TestFunction, generate ONLY the function, must include ```javascript"
            }]
        });
        return response.message.content;

    } catch (error) {
        console.error('Error: ', error.message);
        throw error;
    } 
}

export function extractResponse(api_response) {
    const startIndex = api_response.indexOf('javascript');

    // Adjust startIndex to the start of the actual code
    const codeStartIndex = startIndex + 'javascript\n'.length;

    // Find the index of the closing backtick '`' that marks the end of the response
    const endIndex = api_response.indexOf('```', codeStartIndex);

    // Extract the code block from the response based on the indices
    const extractedFunc = api_response.substring(codeStartIndex, endIndex);
    return extractedFunc;
}