import { directDownloadUrl } from "@/lib/site";

type DownloadButtonProps = {
  className?: string;
  label?: string;
  ariaLabel?: string;
};

export default function DownloadButton({
  className = "mu-google-btn",
  label = "Download Now",
  ariaLabel = "Download Appopener APK directly",
}: DownloadButtonProps) {
  return (
    <a
      className={className}
      href={directDownloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <i className="fa fa-download" />
      <span>{label}</span>
    </a>
  );
}
