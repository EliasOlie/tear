import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Poem</CardTitle>
            <CardDescription>A short verse</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Roses are red,
              <br />
              Violets are blue,
              <br />
              Coding is fun,
              <br />
              Especially with you.
            </p>

            <p className="ml-6">-Coding Shakespere</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>I love it</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
