import { expect } from 'chai'

const input = `returns the sum of two numbers`;
const questionNumber = 0;

describe("test user submission", function() {
    this.timeout(120000);
    it('user submission successful', async() => {

        const response = await fetch('http://localhost:3080/submission', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input, questionNumber }),
          });

        if (response.ok) {
            expect(response.status)
            .to
            .equal(200);
        } else {
            throw new Error('Failed to submit user input');
        }
    });
});