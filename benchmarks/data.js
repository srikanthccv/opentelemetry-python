window.BENCHMARK_DATA = {
  "lastUpdate": 1608103945468,
  "repoUrl": "https://github.com/lonewolf3739/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608103942999,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25732.297054358314,
            "unit": "iter/sec",
            "range": "stddev: 0.000004455523986743597",
            "extra": "mean: 38.86166858277539 usec\nrounds: 4523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20930.568639234083,
            "unit": "iter/sec",
            "range": "stddev: 0.00000731344716300265",
            "extra": "mean: 47.77701061238789 usec\nrounds: 6973"
          }
        ]
      }
    ]
  }
}