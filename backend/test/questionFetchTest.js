import { expect } from 'chai'

describe("test if fetch is working", function() {
    it('fetch the questions from easy problembank and get the qNum of each', async() => {
            const response = await fetch('http://localhost:3080/question/easy');
            if(response.ok) {
            const questions = await response.json();
            expect(questions[0].qNum).to.equal(1);
            expect(questions[1].qNum).to.equal(2);
            expect(questions[2].qNum).to.equal(3);
            expect(questions[3].qNum).to.equal(4);
            expect(questions[4].qNum).to.equal(5);
            expect(questions[5].qNum).to.equal(6);
            }
       
    });
});