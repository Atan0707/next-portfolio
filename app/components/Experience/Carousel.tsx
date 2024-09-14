import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselUBA() {
  return (
    <div className="uba flex justify-center items-center">
      {/* Centering the carousel */}
      <Carousel className="w-full max-w-3xl">
        {/* Adjusted max width to make the carousel smaller */}
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-3/12 lg:basis-5/12 sm:basis-3/12">
              {/* Adjusted width to show more items at once */}
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center">
                    {/* Adjusted padding to make it smaller */}
                    <Image
                      src={`/uba/${index + 1}.jpg`} // Replace with your image paths
                      alt={`Image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" // Added sizes prop for different breakpoints
                      style={{ objectFit: "cover" }} // Use the `style` prop for object fit
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
