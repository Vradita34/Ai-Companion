import prismadb from "@/lib/prismadb";

interface CompanionIdPageProps {
    params: {
        companionId: string;
    };
};

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
    // TOdo check subcription



    const category = await prismadb.category.findMany();

    return (
        <div className="">
            Hello Companion Id
        </div>
    );
}

export default CompanionIdPage;