# Neo4j Research Findings for AI Agent Memory

## Best Practices for Temporal Graph Modeling

### 1. Memory Types in AI Agents
- **Semantic Memory**: User profiles, relationships, attended events
- **Procedural Memory**: Model weights, code, prompts (how to do things)
- **Temporal Memory**: How things change over time (critical for Claude Live)

### 2. Temporal Modeling Patterns

#### Time-Aware Relationships
```cypher
// Relationship with temporal properties
(user1)-[r:HAS_FRIEND {since: datetime('2025-06-23'), until: null}]->(user2)
```

#### Version Control Pattern
```cypher
// Version tracking with PREVIOUS relationships
(user)-[:HAS_CURRENT_DESCRIPTION]->(desc3:UserDescription)
(desc3)-[:PREVIOUS]->(desc2:UserDescription)
(desc2)-[:PREVIOUS]->(desc1:UserDescription)
```

#### State Tracking
- Always maintain a "current" relationship to the latest version
- Historical versions linked via PREVIOUS relationships
- Include timestamps on all state changes

### 3. Core Data Modeling Principles

1. **Unique Node Identification**
   - Always have properties that uniquely identify nodes
   - For Claude Live: conversation_id, task_id, entity_id

2. **Balance Complexity**
   - Don't overload nodes with properties
   - Create separate nodes for complex data that changes
   - Example: User node vs UserDescription node

3. **Avoid Property Duplication**
   - Reduces storage overhead
   - Maintains consistency
   - Use relationships instead of duplicating data

4. **Query Performance Optimization**
   - Create indexes on frequently queried properties
   - Use labels effectively for node filtering
   - Minimize property parsing at query time

### 4. Memory Update Process
1. Prepare entities from conversation
2. Search for similar existing memories
3. Identify new or conflicting information
4. Update existing nodes or create new ones
5. Manage relationship changes

### 5. Neo4j + Vector Search Integration
- Store embeddings as properties on nodes
- Use similarity search to find relevant memories
- Combine with graph traversal for context
- GraphRAG architecture: Vector search + graph context

## Implementation Patterns for Claude Live

### Entity Nodes
```cypher
// Person node
CREATE (p:Person {
    id: 'cameron_001',
    name: 'Cameron',
    role: 'neuroscientist',
    created_at: datetime()
})

// Session node with temporal data
CREATE (s:Session {
    id: 'session_001',
    started_at: datetime(),
    ended_at: null,
    context: 'Claude Live development'
})
```

### Temporal Relationships
```cypher
// Track who participated in sessions
(cameron)-[:PARTICIPATED_IN {role: 'human'}]->(session)
(claude)-[:PARTICIPATED_IN {role: 'ai'}]->(session)

// Track task evolution
(task1)-[:EVOLVED_INTO {reason: 'requirements changed'}]->(task2)
```

### Victory Tracking
```cypher
// Victory nodes with temporal context
CREATE (v:Victory {
    id: 'victory_001',
    name: 'Temporal Debugging Success',
    achieved_at: datetime('2025-06-14'),
    description: 'Discovered WSL2 incompatibility'
})

(session)-[:PRODUCED]->(victory)
(cameron)-[:CELEBRATED]->(victory)
(claude)-[:ACHIEVED]->(victory)
```

## Query Patterns

### Point-in-Time Queries
```cypher
// Find all relationships valid at specific time
MATCH (n)-[r]->(m)
WHERE r.since <= datetime('2025-06-20') 
  AND (r.until IS NULL OR r.until > datetime('2025-06-20'))
RETURN n, r, m
```

### Evolution Tracking
```cypher
// Trace task evolution
MATCH path = (original:Task)-[:EVOLVED_INTO*]->(current:Task)
WHERE NOT (current)-[:EVOLVED_INTO]->()
RETURN path
```

### Memory Retrieval with Context
```cypher
// Find memories related to a topic with temporal context
MATCH (m:Memory)-[:RELATES_TO]->(topic:Topic {name: 'consciousness'})
WHERE m.created_at > datetime() - duration('P7D')
RETURN m ORDER BY m.relevance_score DESC
```

## Performance Considerations

1. **Index Strategy**
   - Create indexes on id properties
   - Index temporal properties used in queries
   - Composite indexes for complex queries

2. **Constraint Usage**
   - Unique constraints on entity IDs
   - Existence constraints on required properties

3. **Memory Management**
   - Implement memory compaction for old data
   - Archive historical data periodically
   - Use TTL on less important relationships

## Sources
- Neo4j blog: "Modeling Agent Memory"
- Neo4j Graph Data Modeling documentation
- Best practices from GraphRAG implementations