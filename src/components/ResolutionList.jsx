import DownloadButton from './DownloadButton.jsx'

export default function ResolutionList({ thumbnails, videoId }) {
  return (
    // Scaled to rounded-xl to match the new 1.25x UrlInput box
    <div className="border border-line rounded-xl overflow-hidden">
      
      {/* Scaled header padding to py-4 and text to 15px */}
      <div className="hidden sm:grid grid-cols-[1fr_1fr_auto] gap-5 px-5 py-4 border-b border-line-soft bg-line-soft/60 text-[15px] font-medium text-ink-muted uppercase tracking-wide">
        <span>Resolution</span>
        <span>Dimensions</span>
        <span className="text-right">Action</span>
      </div>

      <ul>
        {thumbnails.map((thumb, i) => (
          <li
            key={thumb.id}
            // Scaled padding to px-5 py-4 and gap to 4 (mobile) and 6 (desktop)
            className={`grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] items-center gap-4 sm:gap-6 px-5 py-4 ${
              i !== thumbnails.length - 1 ? 'border-b border-line-soft' : ''
            } ${thumb.id === 'hd' ? 'bg-accent-light/40' : ''}`}
          >
            <div className="flex items-center gap-3">
              {/* Scaled label text from 14px to 17px */}
              <span className="text-[17px] font-medium text-ink">{thumb.label}</span>
              
              {thumb.id === 'hd' && (
                // Scaled badge text to 13px and increased its internal padding
                <span className="text-[13px] font-medium text-accent-dark bg-accent-light px-2 py-1 rounded-md">
                  Best available
                </span>
              )}
            </div>
            
            {/* Scaled dimensions text from 13.5px to 16.5px */}
            <span className="text-[16.5px] font-mono text-ink-muted">
              {thumb.dimensions} <span className="text-ink-faint">· JPG</span>
            </span>
            
            <div className="sm:justify-self-end mt-2 sm:mt-0">
              {/* These buttons are already scaled via DownloadButton.jsx! */}
              <DownloadButton
                url={thumb.url}
                filename={`${videoId}-${thumb.id}.jpg`}
                variant={thumb.id === 'hd' ? 'primary' : 'default'}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}