"use client";

import { Button } from "@/components/ui/button";

import { pay } from "@/actions/actions";
import { Session } from "next-auth";

type PayButtonProps = {
  session: Session;
};

const PayButton = ({ session }: PayButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <Button variant="outline" size="lg" onClick={() => pay(session)}>
        Pay
      </Button>
    </div>
  );
};

export default PayButton;
