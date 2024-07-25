import { expect } from 'chai';


describe("test get user id", function() {
    it('get user id successful', async() => {
        const user_id = "user_2iwgrMI5lceMc1smGqC3uNHpilH";

        const response = await fetch(`http://localhost:3080/results/${user_id}`);
        if (response.ok) {
            expect(response.status)
            .to
            .equal(200);

            let data = await response.json();
            let resultUserId = data.userid;

            expect(resultUserId)
            .to
            .equal(user_id);
        } else {
            throw new Error('Failed to fetch userid');
        }
    });
});