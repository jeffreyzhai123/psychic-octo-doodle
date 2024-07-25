import { callChat } from "../services/ollamaService.js";
import { expect } from 'chai';

describe("test ollama helper function", function() {

    this.timeout(120000);
    it("call ollama return non-empty string", async ()=>{
    
        const ollamaResponse = await callChat("hello world");
        expect(ollamaResponse)
        .to
        .not
        .equal("");
        
        
    });

    it("call ollama return text that contains javascript code", async () =>{
  
        const ollamaResponse = await callChat("subtract two numbers");
        expect(
            ollamaResponse.includes("Here is the JavaScript function") || 
            ollamaResponse.includes("```javascript")
        ).to.be.true;

    });

    it("call ollama with input other than english (French)", async () =>{

        const ollamaResponse = await callChat("ajouter deux nombres");
        expect(
            ollamaResponse.includes("Here is the JavaScript function") || 
            ollamaResponse.includes("```javascript")
        ).to.be.true;
   
    });

    it("call ollama with input other than english (chinese)", async () =>{
  
        const ollamaResponse = await callChat("两个数字之和");
        expect(
            ollamaResponse.includes("Here is the JavaScript function") || 
            ollamaResponse.includes("```javascript")
        ).to.be.true;

    });

    it("call ollama with input other than english (Korean)", async () =>{

        const ollamaResponse = await callChat("두 숫자 빼기");
        expect(
            ollamaResponse.includes("Here is the JavaScript function") || 
            ollamaResponse.includes("```javascript")
        ).to.be.true;
   
    });


})