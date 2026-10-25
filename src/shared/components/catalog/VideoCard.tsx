export function VideoCard({ title, url }: { title: string; url: string }) {
  let safeUrl: URL;
  try {
    safeUrl = new URL(url);
  } catch {
    return null;
  }
  if (!['http:', 'https:'].includes(safeUrl.protocol)) return null;
  // Only known embed routes are framed. Ordinary video pages remain working links.
  const host = safeUrl.hostname;
  let embed = '';
  if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'].includes(host)) {
    const id =
      host === 'youtu.be'
        ? safeUrl.pathname.slice(1)
        : safeUrl.pathname.startsWith('/embed/')
          ? safeUrl.pathname.split('/')[2]
          : safeUrl.searchParams.get('v');
    if (id && /^[\w-]{11}$/.test(id)) embed = `https://www.youtube-nocookie.com/embed/${id}`;
  } else if (
    (host === 'rutube.ru' && safeUrl.pathname.startsWith('/play/embed/')) ||
    (['vk.com', 'vkvideo.ru'].includes(host) && safeUrl.pathname === '/video_ext.php') ||
    (host === 'player.vimeo.com' && safeUrl.pathname.startsWith('/video/'))
  )
    embed = safeUrl.href;
  return (
    <article className="media-card">
      <div className="video">
        {embed ? (
          <iframe
            title={title}
            src={embed}
            loading="lazy"
            allow="encrypted-media; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <a className="video-link" href={safeUrl.href} target="_blank" rel="noopener noreferrer">
            <span className="play" aria-hidden="true" />
            <span>{title}</span>
            <span className="small">Смотреть интервью ↗</span>
          </a>
        )}
      </div>
      <p className="media-title">{title}</p>
      {embed && (
        <p className="small media-caption">
          <a href={safeUrl.href} target="_blank" rel="noopener noreferrer">
            Открыть видео на сайте ↗
          </a>
        </p>
      )}
    </article>
  );
}
