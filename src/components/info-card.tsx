import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { CircleCheckBig } from "lucide-react";

const ACTION_BTN_CLASSES =
  "whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full flex items-center justify-center gap-2";

function InfoRow({
  label,
  children,
  labelClass = "text-sm font-medium text-gray-500",
  valueClass = "text-sm",
}: {
  label: string;
  children: React.ReactNode;
  labelClass?: string;
  valueClass?: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-1">
      <p className={labelClass}>{label}</p>
      <p className={`col-span-2 ${valueClass}`}>{children}</p>
    </div>
  );
}

function InfoCard({
  name,
  email,
  movie,
  comment,
  resetForm,
}: {
  name: string;
  email: string;
  movie: string;
  comment: string;
  resetForm: () => void;
}) {
  return (
    <section className=" space-y-6 px-6">
      <div className="rounded-lg bg-green-50 p-4 border border-green-200">
        <h3 className="text-lg font-medium text-green-800 flex items-center gap-2 mb-4">
          <CircleCheckBig />
          ส่งแบบสำรวจสำเร็จ!
        </h3>
        <div className="space-y-3 text-left">
          <InfoRow label=" ชื่อ:">{name}</InfoRow>
          <InfoRow label=" อีเมล:">{email}</InfoRow>
          <InfoRow label=" หนังที่เลือก:" valueClass="text-sm font-medium text-purple-700">
            {movie}
          </InfoRow>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-left">
          <p className="text-sm font-medium text-gray-500 mb-2">ความคิดเห็น:</p>
          <p className="text-sm bg-gray-50 p-3 rounded-md">{comment}</p>
        </div>
      </div>
      <Button type="button" onClick={resetForm} className={ACTION_BTN_CLASSES}>
        <RefreshCw />
        ทำแบบสำรวจใหม่
      </Button>
    </section>
  );
}

export default InfoCard;
