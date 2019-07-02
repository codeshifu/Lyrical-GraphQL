const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema(
  {
    title: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    lyrics: [
      {
        type: Schema.Types.ObjectId,
        ref: "lyric"
      }
    ]
  },
  {
    usePushEach: true
  }
);

SongSchema.statics.addLyric = async function(id, content) {
  const Lyric = mongoose.model("lyric");

  try {
    const song = await this.findById(id);
    const lyric = new Lyric({ content, song });
    song.lyrics.push(lyric.id);
    await lyric.save();
    await song.save();

    return song;
  } catch (error) {
    console.log(error.message);
  }
};

SongSchema.statics.findLyrics = function(id) {
  return this.findById(id)
    .populate("lyrics")
    .then(song => {
      return song.lyrics;
    });
};

mongoose.model("song", SongSchema);
