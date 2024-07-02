const app=require('./app');
const supertest=require('supertest');
const request=supertest(app);

describe('/demo endpoint',()=>{
    it('should return a response',async()=>{
        const response=await request.get('/demo');
        expect(response.status).toBe(400);
        expect(response.text).toBe('demo endpoint not working properly');
    });
});
