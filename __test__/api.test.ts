import request from "supertest";
import app from '../src/app'
import Book from "../src/dbmodel";


describe('Group to create book',()=>{

    const book={
        "bookName": "Test on jest 666"  ,
        "author": "Jes2" ,
        "genre": "testing" ,
        "ratings": 1
    };

    test('should have been called once',async ()=>{

        const mockCreateBookDb=jest.fn(():any=>book);

        jest
         .spyOn(Book,"create")
         .mockImplementation(()=>mockCreateBookDb())
 
        const res=await request(app).post("/createbook").send(book);
        // console.log(mockCreateBookDb);

        expect(mockCreateBookDb).toHaveBeenCalledTimes(1);
    })

    test('should have msg and err prop',async ()=>{
        const mockCreateBookDb=jest.fn(()=>book);
        jest
         .spyOn(Book,"create")
         .mockImplementation(()=>mockCreateBookDb);
         
        const res=await request(app).post('/createbook').send(book);
        console.log(res);
        expect(res.body).toHaveProperty("msg");
    })



})