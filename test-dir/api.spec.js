import request from "supertest";
import app from "../app";

xdescribe("GET / ", () => {
    it("It should respond with an array of students", async () => {
      const response = await request(app).get("/");
      expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
      expect(response.statusCode).toBe(200);
    });
});

xdescribe("POST / ", () => {
    it("Insert data",async () =>{
        const response = await request(app).post('/insert').send({username: 'john'}).set('Accept', 'application/json')
        expect(response.body).toContain('john');
        expect(response.statusCode).toBe(200);

    })
});
