// ------------------ CONFLICT RESOLUTION ------------------

function detectConflict(code1, code2) {
    return code1 !== code2;
}

function resolveConflict() {
    let code1 = document.getElementById("code1").value;
    let code2 = document.getElementById("code2").value;

    if (!detectConflict(code1, code2)) {
        document.getElementById("output").innerText = "No conflict detected.";
        return;
    }

    let resolved;
    let confidence;

    // Simulated AI logic
    if (code2.length > code1.length) {
        resolved = code2;
        confidence = "85%";
    } else {
        resolved = code1;
        confidence = "75%";
    }

    document.getElementById("output").innerText =
        "Conflict Resolved ✅\n\n" +
        resolved +
        "\n\nAI Confidence: " + confidence;
}


// ------------------ PIPELINE ANALYSIS ------------------

function analyzePipeline() {
    let build = parseInt(document.getElementById("build").value);
    let test = parseInt(document.getElementById("test").value);
    let deploy = parseInt(document.getElementById("deploy").value);

    if (isNaN(build) || isNaN(test) || isNaN(deploy)) {
        document.getElementById("pipelineOutput").innerText = "Please enter all values.";
        return;
    }

    let stages = {
        Build: build,
        Test: test,
        Deploy: deploy
    };

    // Find bottleneck
    let bottleneck = Object.keys(stages).reduce((a, b) => stages[a] > stages[b] ? a : b);

    let suggestion = "";
    let improvement = "";

    if (bottleneck === "Test") {
        suggestion = "Run tests in parallel";
        improvement = "Estimated 30% faster execution";
    } else if (bottleneck === "Build") {
        suggestion = "Use build caching";
        improvement = "Estimated 20% faster build";
    } else {
        suggestion = "Optimize deployment scripts";
        improvement = "Estimated 15% faster deploy";
    }

    document.getElementById("pipelineOutput").innerText =
        "Pipeline Analysis 📊\n\n" +
        "Build: " + build + "s\n" +
        "Test: " + test + "s\n" +
        "Deploy: " + deploy + "s\n\n" +
        "Bottleneck: " + bottleneck + "\n" +
        "Suggestion: " + suggestion + "\n" +
        improvement;
}
