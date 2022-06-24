import request from "supertest";
import app from '../src/app'
import sequelize from "../src/dbconfig";
import Book from "../src/dbmodel";


describe('Group to create book',()=>{
    
    afterEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });
    const book={
        "bookName": "Test on jest 666"  ,
        "author": "Jes2" ,
        "genre": "testing" ,
        "ratings": 1
    };

    test('should have been called once',async ()=>{

        jest
         .spyOn(Book,"create")
         .mockResolvedValueOnce(undefined);
 
        const res=await request(app).post("/book/create").send(book);
        // console.log(mockCreateBookDb);

        expect(Book.create).toHaveBeenCalledTimes(1);
    })

    test('should have msg and err prop',async ()=>{
        jest
         .spyOn(Book,"create")
         .mockResolvedValueOnce(undefined);
        
        
         
        const res= await request(app).post('/book/create').send(book);
        expect(res.body).toHaveProperty("msg","Created New Record");
    })

    test('should have msg and err prop',async ()=>{
        jest
         .spyOn(Book,"create")
         .mockRejectedValueOnce(undefined);
    
        const res= await request(app).post('/book/create').send(book);
        expect(res.body).toHaveProperty("err");
    })
})

describe('Group to get book',()=>{
    afterEach(()=>{
        jest.resetAllMocks,
        jest.clearAllMocks,
        sequelize.close()
    })
    

    test('should return all books ',async ()=>{
        const bookList={"author": "Andy Weir", "bookName": "The Martian", "createdAt": "2022-06-21T18:41:33.000Z", "genre": "Science-Fiction", "id": 2, "ratings": 9, "updatedAt": "2022-06-21T18:41:33.000Z"};
        
        jest
         .spyOn(Book,"findAll")
         .mockResolvedValueOnce(bookList as any);
        //So this resolves our request meaning going to the "then" path and then res.send.

        const res=await request(app).get('/book');
        // console.log(res.body);
        expect(res.body).toEqual(bookList);
    })

    test('should not return error ',async ()=>{
        const bookList={"author": "Andy Weir", "bookName": "The Martian", "createdAt": "2022-06-21T18:41:33.000Z", "genre": "Science-Fiction", "id": 2, "ratings": 9, "updatedAt": "2022-06-21T18:41:33.000Z"};
        
        jest
         .spyOn(Book,"findAll")
         .mockRejectedValueOnce({error:"Rejected Value"});
         //So this gives "Rejected Value" as the error and is console logged from the catch statement.

        const res=await request(app).get('/book');
        // console.log(res.body);
        expect(res.body).toEqual({error:"Rejected Value"});
    })

})

describe("Group to Update Book",()=>{

    afterEach(()=>{
        jest.resetAllMocks;
        jest.clearAllMocks;
        sequelize.close();
    })

    const bookList={author: "Andy Weir"};

    test("should record sucessfully",async ()=>{
         const n1:[affectedCount:number]=[1];
        jest
         .spyOn(Book,"update")
         .mockResolvedValueOnce(n1)
        
        const res=await request(app).patch('/book/update/:id').send(bookList);
        expect(res.body).toHaveProperty("status");
    })

    test("should give error on encountering error",async ()=>{

        jest 
         .spyOn(Book,"update")
         .mockRejectedValueOnce({error:"error in updating"});

        const res=await request(app).patch('/book/update/:id').send(bookList);

        expect(res.body).toHaveProperty("error","error in updating");

    })

})


describe('Group to delete book',()=>{

    afterEach(()=>{
        jest.resetAllMocks;
        jest.clearAllMocks;
        sequelize.close();
    })

    test('should return count',async ()=>{
        
        const n1:number=1;
        
        jest 
         .spyOn(Book,"destroy")
         .mockResolvedValueOnce(n1);

        const res=await request(app).delete('/book/delete/:id');
        expect(res.body).toHaveProperty("status");
    })

    test('should return error in case of error',async ()=>{
        jest
         .spyOn(Book,"destroy")
         .mockRejectedValueOnce({error:"error in deleting"});

        const res=await request(app).delete('/book/delete/:id');
        expect(res.body).toHaveProperty("error");
    })

})