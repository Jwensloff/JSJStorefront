import { CareerPreviewProps } from "@/src/types";
import { Button, Card, CardBody, CardFooter, Typography } from "../../tailwind";

interface CareersProps {
  data: CareerPreviewProps[] | undefined;
}

export default function CareersPreview({ data }: CareersProps) {
  const createCard = (career: CareerPreviewProps) => {
    return (
      <div key={career.id}>
        <Card key={career.id} className="m-20" placeholder={undefined}>
          <CardBody placeholder={undefined}>
            <Typography
              placeholder={undefined}
              variant="h5"
              color="blue-gray"
              className="mb-2"
            >
              {career.title}
            </Typography>
            <Typography placeholder={undefined}>
              {career.description}
            </Typography>
          </CardBody>
          <CardFooter placeholder={undefined} className="pt-0">
            <a href={`/job/${career.id}`} className="inline-block">
              <Button
                placeholder={undefined}
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More -&gt;
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      {data && data?.map((career) => createCard(career))}
    </div>
  );
}
