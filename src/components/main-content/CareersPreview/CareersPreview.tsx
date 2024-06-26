import { CareerPreviewProps } from "../../../app/lib/definitions";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "../../../tailwind";
import React from "react";

interface CareersProps {
  data: CareerPreviewProps[];
}

export default function CareersPreview({ data }: CareersProps) {
  const createCard = (career: CareerPreviewProps) => {
    return (
      <div data-test="career-card" key={career.id} className="xl:w-1/2">
        <Card key={career.id} className="m-20" placeholder={undefined}>
          <CardBody placeholder={undefined}>
            <Typography
              data-test="career-name"
              placeholder={undefined}
              variant="h5"
              color="blue-gray"
              className="mb-2"
            >
              {career.title}
            </Typography>
            <Typography data-test="career-description" placeholder={undefined}>
              {career.description}
            </Typography>
          </CardBody>
          <CardFooter placeholder={undefined} className="pt-0">
            <a href={`/job/${career.id}`} className="inline-block">
              <Button
                data-test="learn-more-btn"
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
    <div className="h-full w-full flex flex-col items-center">
      {data && data?.map((career) => createCard(career))}
    </div>
  );
}
