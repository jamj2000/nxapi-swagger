import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";



export async function GET(request, { params }) {
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const { id } = await params
    const results = await collection.findOne({ _id: new ObjectId(id) })
    console.log(`results`, results);
    if (!results)
        return Response.json({ message: 'Usuario no encontrado' }, { status: 404 })

    return Response.json(results);
}




export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const { id } = await params
    const { nombre, edad } = await request.json() // Read body request
    const results = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { nombre, edad } });
    console.log(`results`, results);
    if (!results.modifiedCount)
        return Response.json({ message: 'Usuario no encontrado' }, { status: 404 })


    return Response.json(results);
}




export async function DELETE(request, { params }) {
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const { id } = await params
    const results = await collection.deleteOne({ _id: new ObjectId(id) })
    console.log(`results`, results);
    if (!results.deletedCount)
        return Response.json({ message: 'Usuario no encontrado' }, { status: 404 })


    return new Response(null, { status: 204 }); // Usamos new Response para código 204: https://github.com/vercel/next.js/discussions/51475
}
