import { Textarea } from "@/components/ui/textarea";

export function ConmmentTextarea({
  comment,
  setComment,
}: {
  comment: string;
  setComment: (value: string) => void;
}) {
  return (
    <div className="text-left text-sm font-medium flex flex-col gap-3">
      <p>ความคิดเห็นเกี่ยวกับหนัง</p>
      <Textarea
        placeholder="พิมพ์ความเห็นของคุณที่นี่..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className="border-gray-200"
      />
    </div>
  );
}
