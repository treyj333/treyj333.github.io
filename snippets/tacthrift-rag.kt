// TacThrift OfflineLLM — On-device RAG retrieval with cosine similarity
// Excerpt from domain/rag/Retriever.kt

class Retriever(
    private val indexRepository: IndexRepository
) {
    suspend fun retrieve(
        queryEmbedding: FloatArray,
        topK: Int,
        minSimilarity: Float
    ): List<RetrievedChunk> {
        val rows = indexRepository.getAllEmbeddingRows()
        if (rows.isEmpty()) return emptyList()

        val scored = rows.mapNotNull { row ->
            if (row.dims != queryEmbedding.size) return@mapNotNull null
            val vector = VectorCodec.toFloatArray(row.vectorBlob, row.dims)
            val score = Similarity.cosineSimilarity(
                queryEmbedding, vector,
                earlyExitThreshold = minSimilarity
            )
            if (score < minSimilarity) return@mapNotNull null
            RetrievedChunk(
                chunkId = row.chunkId,
                documentId = row.documentId,
                fileName = row.displayName,
                pageNumber = row.pageNumber,
                text = row.text,
                similarity = score
            )
        }

        return scored
            .sortedByDescending { it.similarity }
            .take(topK)
            .mapIndexed { i, chunk ->
                chunk.copy(sourceId = "S${i + 1}")   // [S1], [S2] citations
            }
    }
}
