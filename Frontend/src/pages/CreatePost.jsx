

function CreatePost()
{
    return(
    <section className="min-h-screen flex items-center justify-center px-4">
        <form className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 space-y-5">
            
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Create Post</h2>

            {/* Image Upload */}
            <div className="flex flex-col gap-2">

                <label className="text-sm font-medium text-gray-600">Upload Image</label>
                <input
                    type="file"
                    accept="image/*"
                    name="image"
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-yellow-400 file:text-white
                    hover:file:bg-yellow-500
                    cursor-pointer"
                />
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2">

                <label className="text-sm font-medium text-gray-600">Caption</label>
                <input
                    type="text"
                    placeholder="Write something..."
                    name="caption"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 
                    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />

            </div>

            {/* Button */}
            <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold 
            hover:bg-yellow-500 transition duration-200"
            >
            Create Post
            </button>

        </form>
    </section>
    );
}

export default CreatePost;