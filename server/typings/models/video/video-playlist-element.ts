import { VideoPlaylistElementModel } from '@server/models/video/video-playlist-element'
import { PickWith } from '@server/typings/utils'
import { MVideoFormattable, MVideoPlaylistPrivacy, MVideoThumbnail, MVideoUrl } from '@server/typings/models'

type Use<K extends keyof VideoPlaylistElementModel, M> = PickWith<VideoPlaylistElementModel, K, M>

// ############################################################################

export type MVideoPlaylistElement = Omit<VideoPlaylistElementModel, 'VideoPlaylist' | 'Video'>

// ############################################################################

export type MVideoPlaylistElementId = Pick<MVideoPlaylistElement, 'id'>

export type MVideoPlaylistElementLight = Pick<MVideoPlaylistElement, 'id' | 'videoId' | 'startTimestamp' | 'stopTimestamp'>

// ############################################################################

export type MVideoPlaylistVideoThumbnail = MVideoPlaylistElement &
  Use<'Video', MVideoThumbnail>

// ############################################################################

// For API

export type MVideoPlaylistElementAP = MVideoPlaylistElement &
  Use<'Video', MVideoUrl> &
  Use<'VideoPlaylist', MVideoPlaylistPrivacy>

// ############################################################################

// Format for API or AP object

export type MVideoPlaylistElementFormattable = MVideoPlaylistElement &
  Use<'Video', MVideoFormattable>
