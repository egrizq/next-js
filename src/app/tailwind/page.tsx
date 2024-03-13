import "../styles.css"

export default function Card() {
    return (
        <>
            <div className="container mx-auto p-8 border-2 border-black">
                <p className="text-2xl text-center">
                    Tailwind Creating Columns
                </p>
            </div>

            <div className={"container mx-auto p-4 border-2 border-black"}> 
                <div className="flex flex-wrap w-full">

                    <div className="p-3 w-4/12">
                        <div className="flex flex-col rounded-md shadow p-4">
                            <div className="text-xl font-bold text-center">
                                Hellow world
                            </div>
                            <div className={"text-sm mt-2"}>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>

                    <div className="p-3 w-4/12">
                        <div className="flex flex-col shadow p-4">
                            <div className="text-xl font-bold text-end">
                                Hellow world
                            </div>
                            <div className={"text-sm mt-2"}>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>

                    <div className="p-3 w-4/12">
                        <div className="flex bg-white shadow rounded-md">
                            <div className="flex flex-col p-4">
                                <h1 className={"font-bold text-xl"}>Hellow world</h1>
                                <p className="text-sm mt-2">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 w-4/12">
                        <div className="flex flex-col shadow p-4">
                            <div className="text-xl font-bold">
                                Hellow world
                            </div>
                            <div className={"text-sm mt-2"}>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>

                    <div className="p-3 w-4/12">
                        <div className="flex flex-col shadow p-4">
                            <div className="text-xl font-bold">
                                Hellow world
                            </div>
                            <div className={"text-sm mt-2"}>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>

                    <div className="p-3 w-4/12">
                        <div className="flex flex-col shadow p-4">
                            <div className="text-xl font-bold">
                                Hellow world
                            </div>
                            <div className={"text-sm mt-2"}>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}