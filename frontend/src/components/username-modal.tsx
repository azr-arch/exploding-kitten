export const UsernameModal = () => {
    return (
        <div className="w-[400px] aspect-video rounded-lg bg-[#82151b] p-6">
            <div className="flex text-white  flex-col items-center w-full ">
                <p className="text-2xl">Choose your Username</p>
                <form action="" className="mt-4 space-y-2 text-xl">
                    <input
                        type="text"
                        required
                        name="username"
                        placeholder="Username"
                        className="border-2 border-black rounded-2xl bg-transparent w-full h-11 px-6  placeholder:text-[#e4e3e3]"
                    />
                    <button className="rounded-md  text-white bg-red-500 hover:bg-red-600 active:scale-95 transition px-3 py-1">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
