import { googlePlayUrl } from "@/lib/site";

type DownloadButtonProps = {
  className?: string;
  label?: string;
  ariaLabel?: string;
};

export default function DownloadButton({
  className = "mu-google-btn",
  label = "Google Play",
  ariaLabel = "Download Appopener from Google Play",
}: DownloadButtonProps) {
  return (
    <a
      className={className}
      href={googlePlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <i className="fa fa-android" />
      <span>{label}</span>
    </a>
  );
}
