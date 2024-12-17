import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function AlertComp() {
  return (
    <>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
}

export default AlertComp;
