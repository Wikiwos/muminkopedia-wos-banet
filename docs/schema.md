# Schema projektu Muminkopedia

## 1. Model Mongoose

### Character
Model reprezentujący postać.

```ts
import { Schema, model, Types } from "mongoose";

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  locationId: {
    type: Types.ObjectId,
    ref: "Location"
  }
});

export const Character = model("Character", CharacterSchema);

```

### Artifact
Model reprezentujący artifact.

```ts
import { Schema, model, Types } from "mongoose";

const ArtifactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  owner: {
    type: Types.ObjectId,
    ref: "Character",
    required: true
  }
});

export const Artifact = model("Artifact", ArtifactSchema);
```
