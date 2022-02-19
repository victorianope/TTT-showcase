import React, { FC, useRef, useState } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface ErrorFallBackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallBack: FC<ErrorFallBackProps> = (props) => {
  const { error, resetErrorBoundary } = props;

  const [isOpen, setIsOpen] = useState(true);
  const cancelRef = useRef<HTMLDivElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={() => {
        if (resetErrorBoundary) resetErrorBoundary();
        setIsOpen(false);
      }}
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Something went wrong:
          </AlertDialogHeader>
          <AlertDialogBody>{error.message}</AlertDialogBody>
          {resetErrorBoundary && (
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  resetErrorBoundary();
                  setIsOpen(false);
                }}
              >
                Try again
              </Button>
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ErrorFallBack;
