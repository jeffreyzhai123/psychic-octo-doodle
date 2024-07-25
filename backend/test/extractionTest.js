// test/extractiontest.js
import { expect } from 'chai';
import { extractResponse } from '../services/ollamaService.js';

describe('extractResponse', () => {
  it('should extract the JavaScript function from the API response', () => {
    const api_response = `
      Here is your generated function:
      \`\`\`javascript
      function TestFunction() {
        console.log('Hello, world!');
      }
      \`\`\`
    `;
    const expectedFunction = `
      function TestFunction() {
        console.log('Hello, world!');
      }
    `;
    const extractedFunction = extractResponse(api_response);
    expect(extractedFunction.trim()).to.equal(expectedFunction.trim());
  });

  it('should handle responses with multiple code blocks', () => {
    const api_response = `
      Here is your first function:
      \`\`\`javascript
      function FirstFunction() {
        console.log('First');
      }
      \`\`\`
      And here is your second function:
      \`\`\`javascript
      function SecondFunction() {
        console.log('Second');
      }
      \`\`\`
    `;
    const expectedFunction = `
      function FirstFunction() {
        console.log('First');
      }
    `;
    const extractedFunction = extractResponse(api_response);
    expect(extractedFunction.trim()).to.equal(expectedFunction.trim());
  });
});