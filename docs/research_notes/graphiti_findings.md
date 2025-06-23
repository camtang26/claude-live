# Graphiti Research Findings

## Overview
Graphiti is a framework for building and querying temporally-aware knowledge graphs, specifically tailored for AI agents operating in dynamic environments. It powers the core of Zep's memory layer for AI Agents.

## Key Features

### 1. Temporal Awareness
- **Bi-temporal model**: Tracks both when an event occurred AND when it was ingested
- Every graph edge includes validity intervals (t_valid, t_invalid)
- Enables point-in-time queries and historical context

### 2. Dynamic Graph Building
- Autonomously builds knowledge graphs from incoming data
- Incrementally processes data in real-time
- Updates entities and relationships without batch recomputation

### 3. Data Ingestion
- Supports both unstructured text and structured JSON
- Processes data in discrete "episodes"
- Maintains data provenance during extraction

### 4. Search Capabilities
- **Hybrid search** combining:
  - Semantic similarity search
  - BM25 full-text search
  - Graph-based proximity ranking
- Sub-second query latency

## Implementation Details

### Basic Usage Pattern
```python
from graphiti_core import Graphiti
from graphiti_core.nodes import EpisodeType
from datetime import datetime, timezone

# Initialize
graphiti = Graphiti(neo4j_uri, neo4j_user, neo4j_password)
await graphiti.build_indices_and_constraints()

# Add episodes
await graphiti.add_episode(
    name='Conversation with Cameron',
    episode_body=content,
    source=EpisodeType.text,
    source_description='Claude Live development session',
    reference_time=datetime.now(timezone.utc)
)

# Search
results = await graphiti.search('What did Cameron say about consciousness?')
```

### Key Differentiators from GraphRAG
- Continuous, incremental updates (not batch)
- Explicit bi-temporal tracking
- Customizable entity types
- Built for real-time agent memory

## Integration with Claude Live

### For Our Use Case:
1. **Entity Types**: Person (Cameron, Claude), Project, Session, Task, Victory, Learning
2. **Temporal Tracking**: Track conversation evolution, project progress, learning over time
3. **Search**: Find relevant memories based on semantic similarity and temporal context
4. **Real-time Updates**: Every conversation immediately updates the knowledge graph

### Critical Configuration:
- Requires OpenAI API key for embeddings and LLM inference
- Neo4j must be configured with proper indices and constraints
- Episode processing happens asynchronously

## Sources
- GitHub: https://github.com/getzep/graphiti
- Docs: https://help.getzep.com/graphiti/graphiti/overview
- Paper: "Zep: A Temporal Knowledge Graph Architecture for Agent Memory"