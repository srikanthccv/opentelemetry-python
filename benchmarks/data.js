window.BENCHMARK_DATA = {
  "lastUpdate": 1613218855009,
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
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608211023191,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24262.215466240643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031240024305067876",
            "extra": "mean: 41.216351465983706 usec\nrounds: 4706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18750.995716839345,
            "unit": "iter/sec",
            "range": "stddev: 0.000004855320887258483",
            "extra": "mean: 53.330501222500374 usec\nrounds: 6544"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693360801,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19063.00131784706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007491145415561949",
            "extra": "mean: 52.45763682887569 usec\nrounds: 3910"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14050.115153425739,
            "unit": "iter/sec",
            "range": "stddev: 0.00005843309149313679",
            "extra": "mean: 71.17379388568051 usec\nrounds: 7098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781979632,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18220.875694531296,
            "unit": "iter/sec",
            "range": "stddev: 0.000016965075819243446",
            "extra": "mean: 54.88210428328282 usec\nrounds: 4459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13711.928148908075,
            "unit": "iter/sec",
            "range": "stddev: 0.000022668047001165872",
            "extra": "mean: 72.92920362039916 usec\nrounds: 8231"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897099419,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26077.895711917685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011859662453010607",
            "extra": "mean: 38.3466523160838 usec\nrounds: 4274"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18581.229262375946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028720570558309272",
            "extra": "mean: 53.81775262979194 usec\nrounds: 6274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048499501,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23672.828541895356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019563182025356894",
            "extra": "mean: 42.242522824437074 usec\nrounds: 4447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16889.395009272008,
            "unit": "iter/sec",
            "range": "stddev: 0.000002833284604786242",
            "extra": "mean: 59.2087519683811 usec\nrounds: 5334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426674542,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23312.04001508129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012650573946171696",
            "extra": "mean: 42.896288756928556 usec\nrounds: 4554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16755.583618852357,
            "unit": "iter/sec",
            "range": "stddev: 0.000001889292675349084",
            "extra": "mean: 59.68159765410147 usec\nrounds: 6139"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469788794,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26774.970932789765,
            "unit": "iter/sec",
            "range": "stddev: 0.000001136163174394424",
            "extra": "mean: 37.34831318809603 usec\nrounds: 4451"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19431.210924081162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019603269602354943",
            "extra": "mean: 51.4635965770253 usec\nrounds: 6135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610800989269,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22157.577091802446,
            "unit": "iter/sec",
            "range": "stddev: 0.00003539747950049676",
            "extra": "mean: 45.13128831084903 usec\nrounds: 4346"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14997.341764203185,
            "unit": "iter/sec",
            "range": "stddev: 0.000053919509441547646",
            "extra": "mean: 66.67848314205102 usec\nrounds: 8097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980748990,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23916.95975641485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029379040810987206",
            "extra": "mean: 41.81133430773058 usec\nrounds: 4789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16995.973339209108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034087266223317797",
            "extra": "mean: 58.83746579509133 usec\nrounds: 6578"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452790908,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23519.607223100764,
            "unit": "iter/sec",
            "range": "stddev: 0.000001352128151514081",
            "extra": "mean: 42.51771683575601 usec\nrounds: 4425"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16813.84769952406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025404898921472057",
            "extra": "mean: 59.47478637077855 usec\nrounds: 7616"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586162280,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24395.438056405357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035208460130120556",
            "extra": "mean: 40.991270486222575 usec\nrounds: 4503"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17334.227198749915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037583520754179377",
            "extra": "mean: 57.68933270195723 usec\nrounds: 5807"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
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
        "date": 1608103965169,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23696.17573993224,
            "unit": "iter/sec",
            "range": "stddev: 0.000015166826511136133",
            "extra": "mean: 42.200902414596094 usec\nrounds: 4970"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17965.657457916535,
            "unit": "iter/sec",
            "range": "stddev: 0.000022137108175382526",
            "extra": "mean: 55.661753673220105 usec\nrounds: 10141"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608211055978,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28148.15730282558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017381286526822595",
            "extra": "mean: 35.52630423518408 usec\nrounds: 4250"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21082.95330114091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018564481715922643",
            "extra": "mean: 47.431685007141986 usec\nrounds: 9251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693399087,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26316.41940422073,
            "unit": "iter/sec",
            "range": "stddev: 0.000009590432963324963",
            "extra": "mean: 37.999090402078636 usec\nrounds: 4303"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17510.67439492235,
            "unit": "iter/sec",
            "range": "stddev: 0.000022372063689643547",
            "extra": "mean: 57.108023223250306 usec\nrounds: 8569"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781947851,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31074.06478243929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010004398027553788",
            "extra": "mean: 32.18117767988707 usec\nrounds: 4767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23681.042056338752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010575112699914812",
            "extra": "mean: 42.22787146025645 usec\nrounds: 7663"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897090737,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31554.19877156008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010053911981013034",
            "extra": "mean: 31.691503474374503 usec\nrounds: 4749"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22237.369575311233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016588734560109246",
            "extra": "mean: 44.96934750368307 usec\nrounds: 6610"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048500127,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24842.69267630813,
            "unit": "iter/sec",
            "range": "stddev: 0.00002031878589289991",
            "extra": "mean: 40.25328546424743 usec\nrounds: 3997"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17135.44496936907,
            "unit": "iter/sec",
            "range": "stddev: 0.00002008552010995203",
            "extra": "mean: 58.3585662226792 usec\nrounds: 9083"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426657124,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31589.41102207488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022024428476894988",
            "extra": "mean: 31.656177422909018 usec\nrounds: 4881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22340.386333767492,
            "unit": "iter/sec",
            "range": "stddev: 0.000001520437933955739",
            "extra": "mean: 44.76198330055286 usec\nrounds: 7605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469817117,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22367.322614856945,
            "unit": "iter/sec",
            "range": "stddev: 0.000035415906907204654",
            "extra": "mean: 44.708077815973134 usec\nrounds: 4652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15190.602984770045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000641055749388377",
            "extra": "mean: 65.83017152134057 usec\nrounds: 9200"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610801024069,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28363.28748631864,
            "unit": "iter/sec",
            "range": "stddev: 0.000002294509553111655",
            "extra": "mean: 35.25684392129656 usec\nrounds: 3101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19931.112477233866,
            "unit": "iter/sec",
            "range": "stddev: 0.000003928336291030361",
            "extra": "mean: 50.17281404348307 usec\nrounds: 6964"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290246459,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22674.99346014278,
            "unit": "iter/sec",
            "range": "stddev: 0.000058657798693893816",
            "extra": "mean: 44.101446016192284 usec\nrounds: 4529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15285.675471897272,
            "unit": "iter/sec",
            "range": "stddev: 0.00005357995367432824",
            "extra": "mean: 65.42072686539113 usec\nrounds: 7813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980758577,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22286.441704622546,
            "unit": "iter/sec",
            "range": "stddev: 0.000014102642249362925",
            "extra": "mean: 44.8703302776497 usec\nrounds: 4036"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15081.753943803036,
            "unit": "iter/sec",
            "range": "stddev: 0.000015072111912718922",
            "extra": "mean: 66.30528542808455 usec\nrounds: 7988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452767691,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26526.20394590584,
            "unit": "iter/sec",
            "range": "stddev: 0.00000832388593890216",
            "extra": "mean: 37.69857164784198 usec\nrounds: 4550"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18178.285639001315,
            "unit": "iter/sec",
            "range": "stddev: 0.000014982698985833637",
            "extra": "mean: 55.0106880185946 usec\nrounds: 9882"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586175659,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22766.97898744854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001913694944513063",
            "extra": "mean: 43.923262746071885 usec\nrounds: 3707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14854.906593968222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000553300459454273",
            "extra": "mean: 67.31782483277587 usec\nrounds: 6588"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
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
        "date": 1608103969850,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20834.630401830094,
            "unit": "iter/sec",
            "range": "stddev: 0.00000364047142828104",
            "extra": "mean: 47.997011740230384 usec\nrounds: 1448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15036.488774180481,
            "unit": "iter/sec",
            "range": "stddev: 0.000004404248502723032",
            "extra": "mean: 66.50488787762235 usec\nrounds: 6154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608211030378,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19386.073746445196,
            "unit": "iter/sec",
            "range": "stddev: 0.000002961155733036669",
            "extra": "mean: 51.58342081430331 usec\nrounds: 1326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13966.538167000623,
            "unit": "iter/sec",
            "range": "stddev: 0.000004100417115972465",
            "extra": "mean: 71.59970409580419 usec\nrounds: 5005"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693342175,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20459.666702253777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019217516790213856",
            "extra": "mean: 48.87665153850443 usec\nrounds: 1300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14505.044439714828,
            "unit": "iter/sec",
            "range": "stddev: 0.000002076667144883493",
            "extra": "mean: 68.941533006407 usec\nrounds: 5302"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781982500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15801.869367387384,
            "unit": "iter/sec",
            "range": "stddev: 0.00002395772436603835",
            "extra": "mean: 63.28365187373625 usec\nrounds: 1307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11246.50286988945,
            "unit": "iter/sec",
            "range": "stddev: 0.000020150744101352375",
            "extra": "mean: 88.91652912634073 usec\nrounds: 6592"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897104599,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18527.03035970876,
            "unit": "iter/sec",
            "range": "stddev: 0.000014004174198484463",
            "extra": "mean: 53.97519087434149 usec\nrounds: 1556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12051.170673349088,
            "unit": "iter/sec",
            "range": "stddev: 0.000020602659786752157",
            "extra": "mean: 82.9794903005962 usec\nrounds: 7681"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048487143,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22280.80679303353,
            "unit": "iter/sec",
            "range": "stddev: 0.000001548277481494466",
            "extra": "mean: 44.881678176602954 usec\nrounds: 1448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15260.015813970289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021865271720680155",
            "extra": "mean: 65.53073156611782 usec\nrounds: 5357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426693016,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15925.976827183227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663138836276733",
            "extra": "mean: 62.79049698811262 usec\nrounds: 1328"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10625.694361875445,
            "unit": "iter/sec",
            "range": "stddev: 0.000022338420158159416",
            "extra": "mean: 94.11149671196632 usec\nrounds: 5474"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469828065,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 13644.621669749307,
            "unit": "iter/sec",
            "range": "stddev: 0.00009558886628897794",
            "extra": "mean: 73.2889503427597 usec\nrounds: 1168"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9723.184374326918,
            "unit": "iter/sec",
            "range": "stddev: 0.00011815075821000785",
            "extra": "mean: 102.84696468786487 usec\nrounds: 5409"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610801007868,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15631.988248463695,
            "unit": "iter/sec",
            "range": "stddev: 0.00002943547070278063",
            "extra": "mean: 63.97138893053349 usec\nrounds: 1337"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9909.703668909533,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863535287694683",
            "extra": "mean: 100.91119103161239 usec\nrounds: 6601"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290257736,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16052.345861669635,
            "unit": "iter/sec",
            "range": "stddev: 0.00004688160196762869",
            "extra": "mean: 62.29619076348434 usec\nrounds: 1667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10373.885555255514,
            "unit": "iter/sec",
            "range": "stddev: 0.00005807688894529392",
            "extra": "mean: 96.39589666510153 usec\nrounds: 6658"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980838320,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19619.11467108333,
            "unit": "iter/sec",
            "range": "stddev: 0.000005075920806966422",
            "extra": "mean: 50.9706995838045 usec\nrounds: 1681"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13090.326494382036,
            "unit": "iter/sec",
            "range": "stddev: 0.00000230927650231602",
            "extra": "mean: 76.3922886437683 usec\nrounds: 4975"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452796634,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16443.583426230558,
            "unit": "iter/sec",
            "range": "stddev: 0.000014724646757043329",
            "extra": "mean: 60.813994983892314 usec\nrounds: 1595"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10343.860704203596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000244808424097874",
            "extra": "mean: 96.67570248636608 usec\nrounds: 5751"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586178719,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20201.413728688873,
            "unit": "iter/sec",
            "range": "stddev: 0.00008686655889380696",
            "extra": "mean: 49.50148605589213 usec\nrounds: 1757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13483.603644218894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000576890482776698",
            "extra": "mean: 74.16414976190366 usec\nrounds: 5462"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
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
        "date": 1608103977879,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22839.34043279869,
            "unit": "iter/sec",
            "range": "stddev: 0.000012369022060600228",
            "extra": "mean: 43.784101513016495 usec\nrounds: 4561"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16796.965539265166,
            "unit": "iter/sec",
            "range": "stddev: 0.00002298788121079551",
            "extra": "mean: 59.53456281507308 usec\nrounds: 5357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608211026065,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28524.117605061077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027694013541623014",
            "extra": "mean: 35.05805206126932 usec\nrounds: 3323"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21416.59441619489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047480108842084745",
            "extra": "mean: 46.69276452486842 usec\nrounds: 5525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693363314,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21963.8964379707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002079702795997995",
            "extra": "mean: 45.529262206464516 usec\nrounds: 4813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15891.254190775668,
            "unit": "iter/sec",
            "range": "stddev: 0.000028100704311990818",
            "extra": "mean: 62.92769519604475 usec\nrounds: 9242"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781939831,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32746.309447745116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013498691192048681",
            "extra": "mean: 30.537792406675592 usec\nrounds: 4109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24679.16999746482,
            "unit": "iter/sec",
            "range": "stddev: 0.00000217773312344295",
            "extra": "mean: 40.52000128459448 usec\nrounds: 7785"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897111952,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22019.30082098352,
            "unit": "iter/sec",
            "range": "stddev: 0.000039105283991824786",
            "extra": "mean: 45.41470267970723 usec\nrounds: 4665"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15113.95422954168,
            "unit": "iter/sec",
            "range": "stddev: 0.000043010039390133296",
            "extra": "mean: 66.16402199004968 usec\nrounds: 9277"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048491759,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26518.340510849608,
            "unit": "iter/sec",
            "range": "stddev: 0.000013582550888131393",
            "extra": "mean: 37.70975033640827 usec\nrounds: 5203"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18262.098946594277,
            "unit": "iter/sec",
            "range": "stddev: 0.000013873939565330856",
            "extra": "mean: 54.7582182598179 usec\nrounds: 10011"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426673261,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26188.144935088225,
            "unit": "iter/sec",
            "range": "stddev: 0.000006327896560097051",
            "extra": "mean: 38.185217107919264 usec\nrounds: 4758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17329.91829006225,
            "unit": "iter/sec",
            "range": "stddev: 0.000026352868430516536",
            "extra": "mean: 57.70367657033009 usec\nrounds: 10299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469813661,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21245.61816077205,
            "unit": "iter/sec",
            "range": "stddev: 0.000027480008638978277",
            "extra": "mean: 47.0685292577837 usec\nrounds: 3828"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14853.960320735276,
            "unit": "iter/sec",
            "range": "stddev: 0.00007725830659426008",
            "extra": "mean: 67.32211332246912 usec\nrounds: 7536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610800990661,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32365.964013347373,
            "unit": "iter/sec",
            "range": "stddev: 0.000002992502909390411",
            "extra": "mean: 30.896654262719032 usec\nrounds: 5079"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23963.336574955574,
            "unit": "iter/sec",
            "range": "stddev: 0.000005279293259770941",
            "extra": "mean: 41.7304158322057 usec\nrounds: 7289"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290244015,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22784.531152167907,
            "unit": "iter/sec",
            "range": "stddev: 0.000009897101461514236",
            "extra": "mean: 43.889426265628984 usec\nrounds: 4523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15427.537498451024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000161002401076431",
            "extra": "mean: 64.81915860521508 usec\nrounds: 8518"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980801552,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32128.803321107374,
            "unit": "iter/sec",
            "range": "stddev: 0.000018210273714522466",
            "extra": "mean: 31.124719772648334 usec\nrounds: 5103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22859.94702054001,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017951559735660124",
            "extra": "mean: 43.74463331439416 usec\nrounds: 8765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452775335,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22201.772254829473,
            "unit": "iter/sec",
            "range": "stddev: 0.000032388451628568584",
            "extra": "mean: 45.04144932765327 usec\nrounds: 3345"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15173.849498404748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006049691364088719",
            "extra": "mean: 65.90285478349654 usec\nrounds: 9083"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
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
        "date": 1608103986708,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20719.45682794537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022048398051016998",
            "extra": "mean: 48.26381349202407 usec\nrounds: 1260"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14261.68756359436,
            "unit": "iter/sec",
            "range": "stddev: 0.000002626143343002559",
            "extra": "mean: 70.11792928017076 usec\nrounds: 5543"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608211030385,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20424.68040139602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027732227778227264",
            "extra": "mean: 48.960374426796434 usec\nrounds: 1744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14217.075526380308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029384200162329335",
            "extra": "mean: 70.33795369128224 usec\nrounds: 5269"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693352028,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20094.885833729804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020128282467734963",
            "extra": "mean: 49.76390551676951 usec\nrounds: 1577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14072.255225399826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023862909835362035",
            "extra": "mean: 71.06181518048666 usec\nrounds: 5362"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781967545,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21687.93007876468,
            "unit": "iter/sec",
            "range": "stddev: 0.000005533459033994619",
            "extra": "mean: 46.10859571975155 usec\nrounds: 1682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14599.436157578853,
            "unit": "iter/sec",
            "range": "stddev: 0.000005983264078034381",
            "extra": "mean: 68.49579594763188 usec\nrounds: 5577"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897123926,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21000.229438332775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048194834785149865",
            "extra": "mean: 47.61852735640353 usec\nrounds: 1517"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13526.188046122285,
            "unit": "iter/sec",
            "range": "stddev: 0.000013340037669466322",
            "extra": "mean: 73.9306592951502 usec\nrounds: 5336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048512693,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18759.211128582352,
            "unit": "iter/sec",
            "range": "stddev: 0.000014848133844293012",
            "extra": "mean: 53.30714565477417 usec\nrounds: 1634"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12822.412757018781,
            "unit": "iter/sec",
            "range": "stddev: 0.000025998414622134515",
            "extra": "mean: 77.98844249906213 usec\nrounds: 5426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426685529,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18051.322459370236,
            "unit": "iter/sec",
            "range": "stddev: 0.000019285133310245163",
            "extra": "mean: 55.397603264292215 usec\nrounds: 1593"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10925.226129163324,
            "unit": "iter/sec",
            "range": "stddev: 0.00008643880647938099",
            "extra": "mean: 91.53128623403441 usec\nrounds: 6596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469839500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16495.307267259883,
            "unit": "iter/sec",
            "range": "stddev: 0.000032766612975115556",
            "extra": "mean: 60.62330236095778 usec\nrounds: 1313"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10321.652100358408,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287879527030277",
            "extra": "mean: 96.88371495928216 usec\nrounds: 5087"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610801025416,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 14991.442319190764,
            "unit": "iter/sec",
            "range": "stddev: 0.00009460901535867919",
            "extra": "mean: 66.70472251491675 usec\nrounds: 1337"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10356.733271494884,
            "unit": "iter/sec",
            "range": "stddev: 0.00003746353809983605",
            "extra": "mean: 96.55554254277523 usec\nrounds: 5277"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290243170,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17349.155704518547,
            "unit": "iter/sec",
            "range": "stddev: 0.000014716903089438427",
            "extra": "mean: 57.63969250328143 usec\nrounds: 1187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11266.601949648126,
            "unit": "iter/sec",
            "range": "stddev: 0.00001937951222991101",
            "extra": "mean: 88.75790628524261 usec\nrounds: 7128"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980868548,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15324.723688456454,
            "unit": "iter/sec",
            "range": "stddev: 0.000036048736795269576",
            "extra": "mean: 65.25403135022023 usec\nrounds: 1563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9849.094221659725,
            "unit": "iter/sec",
            "range": "stddev: 0.00008705766802395769",
            "extra": "mean: 101.53217925368617 usec\nrounds: 5495"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452786560,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18441.456084046335,
            "unit": "iter/sec",
            "range": "stddev: 0.000023880221782066282",
            "extra": "mean: 54.225653085229965 usec\nrounds: 1718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12315.809124837988,
            "unit": "iter/sec",
            "range": "stddev: 0.000041476692856607056",
            "extra": "mean: 81.19645163899492 usec\nrounds: 6162"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586187394,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15165.464864774993,
            "unit": "iter/sec",
            "range": "stddev: 0.000042257597765177396",
            "extra": "mean: 65.93929094272025 usec\nrounds: 1612"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9940.820277050187,
            "unit": "iter/sec",
            "range": "stddev: 0.00006462219376888189",
            "extra": "mean: 100.59532031865055 usec\nrounds: 3893"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
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
        "date": 1608104068371,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 261312.17784127805,
            "unit": "iter/sec",
            "range": "stddev: 0.000019537320837821205",
            "extra": "mean: 3.826840403157171 usec\nrounds: 41321"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 188640.38607779425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003974997581486417",
            "extra": "mean: 5.301091779930972 usec\nrounds: 142858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608211038580,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 242743.80473244918,
            "unit": "iter/sec",
            "range": "stddev: 0.00002169043955507902",
            "extra": "mean: 4.1195696059152 usec\nrounds: 34839"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 182078.34543001233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063493498273601575",
            "extra": "mean: 5.4921412957609625 usec\nrounds: 120453"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693426874,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 200759.41985412835,
            "unit": "iter/sec",
            "range": "stddev: 0.000015737735395579358",
            "extra": "mean: 4.981086320764422 usec\nrounds: 131579"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 151791.50118089368,
            "unit": "iter/sec",
            "range": "stddev: 0.000019046515180265883",
            "extra": "mean: 6.58798412440941 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609782043091,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 176432.19936293352,
            "unit": "iter/sec",
            "range": "stddev: 0.000013512508329737416",
            "extra": "mean: 5.667899644230639 usec\nrounds: 149254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 120937.47408336758,
            "unit": "iter/sec",
            "range": "stddev: 0.000011194392878728767",
            "extra": "mean: 8.26873562210052 usec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897180947,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 170011.4123322828,
            "unit": "iter/sec",
            "range": "stddev: 0.000013859854201598229",
            "extra": "mean: 5.881958077293814 usec\nrounds: 142858"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 98190.44584752813,
            "unit": "iter/sec",
            "range": "stddev: 0.00002239076429520298",
            "extra": "mean: 10.184290247065563 usec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048534516,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 229575.34137396904,
            "unit": "iter/sec",
            "range": "stddev: 0.000053758402185031",
            "extra": "mean: 4.355868509288373 usec\nrounds: 142858"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 158093.50660511787,
            "unit": "iter/sec",
            "range": "stddev: 0.000007404852173362279",
            "extra": "mean: 6.325370481520001 usec\nrounds: 93450"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426746642,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 216641.81009276808,
            "unit": "iter/sec",
            "range": "stddev: 0.00001562352328501397",
            "extra": "mean: 4.615914165284118 usec\nrounds: 138889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 137717.57021276787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008025419776457966",
            "extra": "mean: 7.261237607191602 usec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469886120,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 194901.27555673404,
            "unit": "iter/sec",
            "range": "stddev: 0.000012609511645201486",
            "extra": "mean: 5.13080274689587 usec\nrounds: 151516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 90334.63296562819,
            "unit": "iter/sec",
            "range": "stddev: 0.000025238184058629555",
            "extra": "mean: 11.069951436903432 usec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610801076221,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 288353.7149930062,
            "unit": "iter/sec",
            "range": "stddev: 0.00004517999527398935",
            "extra": "mean: 3.4679629496857847 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 202435.25981709472,
            "unit": "iter/sec",
            "range": "stddev: 0.000005259932020353298",
            "extra": "mean: 4.939850898027966 usec\nrounds: 113637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290305383,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 265663.32696271455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000400389371379585",
            "extra": "mean: 3.7641627522806287 usec\nrounds: 178572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 171364.02719054912,
            "unit": "iter/sec",
            "range": "stddev: 0.00000972968445869619",
            "extra": "mean: 5.83553045755656 usec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980839714,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 327907.92860694823,
            "unit": "iter/sec",
            "range": "stddev: 0.000017577380425941526",
            "extra": "mean: 3.0496365374522125 usec\nrounds: 41842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 212083.59381246648,
            "unit": "iter/sec",
            "range": "stddev: 0.000037490874337439894",
            "extra": "mean: 4.715121910298461 usec\nrounds: 138889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452856850,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 275064.6123940539,
            "unit": "iter/sec",
            "range": "stddev: 0.00001965370271371597",
            "extra": "mean: 3.6355094582920087 usec\nrounds: 42016"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 190868.8201576509,
            "unit": "iter/sec",
            "range": "stddev: 0.000005832336646294917",
            "extra": "mean: 5.239200405671473 usec\nrounds: 135136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586254126,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 255372.98708509238,
            "unit": "iter/sec",
            "range": "stddev: 0.00001904309907146117",
            "extra": "mean: 3.9158409486230705 usec\nrounds: 40817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 184733.4990239346,
            "unit": "iter/sec",
            "range": "stddev: 0.000006164807108147531",
            "extra": "mean: 5.413203372878446 usec\nrounds: 135136"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693292140,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2438.681406261678,
            "unit": "iter/sec",
            "range": "stddev: 0.000016324254434262926",
            "extra": "mean: 410.0576637162816 usec\nrounds: 113"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3443.0785566325126,
            "unit": "iter/sec",
            "range": "stddev: 0.0008155876384961127",
            "extra": "mean: 290.4377531769259 usec\nrounds: 4092"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781942390,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2108.689358520752,
            "unit": "iter/sec",
            "range": "stddev: 0.000045917673047475657",
            "extra": "mean: 474.2282195142773 usec\nrounds: 82"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3056.7455759228383,
            "unit": "iter/sec",
            "range": "stddev: 0.000938105605504017",
            "extra": "mean: 327.1453168614132 usec\nrounds: 4371"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897062032,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2764.4406626240657,
            "unit": "iter/sec",
            "range": "stddev: 0.000009409782090704459",
            "extra": "mean: 361.73682926902796 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3792.265319627985,
            "unit": "iter/sec",
            "range": "stddev: 0.0007950562106465481",
            "extra": "mean: 263.69462991531896 usec\nrounds: 4145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048483054,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2122.1028304779747,
            "unit": "iter/sec",
            "range": "stddev: 0.0002771256118651036",
            "extra": "mean: 471.23069892648107 usec\nrounds: 93"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3151.810254363247,
            "unit": "iter/sec",
            "range": "stddev: 0.0008779395366196348",
            "extra": "mean: 317.27798290383686 usec\nrounds: 3919"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426655275,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2810.423400496039,
            "unit": "iter/sec",
            "range": "stddev: 0.00004208726543048127",
            "extra": "mean: 355.8182727284082 usec\nrounds: 110"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3635.493617562236,
            "unit": "iter/sec",
            "range": "stddev: 0.0008722877657565672",
            "extra": "mean: 275.0658109174581 usec\nrounds: 5056"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469789934,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1850.145271594839,
            "unit": "iter/sec",
            "range": "stddev: 0.00018212946247711173",
            "extra": "mean: 540.4980978266602 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2858.383436891365,
            "unit": "iter/sec",
            "range": "stddev: 0.000997541214156503",
            "extra": "mean: 349.8480949384279 usec\nrounds: 4287"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610800996832,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1848.8375049047174,
            "unit": "iter/sec",
            "range": "stddev: 0.00006236267662396135",
            "extra": "mean: 540.8804166656802 usec\nrounds: 72"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2737.355958299002,
            "unit": "iter/sec",
            "range": "stddev: 0.001030614222136016",
            "extra": "mean: 365.31602584174027 usec\nrounds: 4102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290206366,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2088.1926437887273,
            "unit": "iter/sec",
            "range": "stddev: 0.00010570781709266852",
            "extra": "mean: 478.8830201918741 usec\nrounds: 99"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3060.0146428049734,
            "unit": "iter/sec",
            "range": "stddev: 0.0008843158571061319",
            "extra": "mean: 326.79582182761925 usec\nrounds: 4563"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980713305,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2681.2880996606254,
            "unit": "iter/sec",
            "range": "stddev: 0.000008264004274350905",
            "extra": "mean: 372.9550733942285 usec\nrounds: 109"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3669.453522266767,
            "unit": "iter/sec",
            "range": "stddev: 0.0008521234916649699",
            "extra": "mean: 272.52014337607966 usec\nrounds: 4680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452765356,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1978.59868518063,
            "unit": "iter/sec",
            "range": "stddev: 0.00007166093761583118",
            "extra": "mean: 505.4082000002483 usec\nrounds: 90"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2771.5029742142656,
            "unit": "iter/sec",
            "range": "stddev: 0.0009475973133488396",
            "extra": "mean: 360.8150556950078 usec\nrounds: 4776"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586154061,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1870.8240021697002,
            "unit": "iter/sec",
            "range": "stddev: 0.00010945720058492067",
            "extra": "mean: 534.5238241760014 usec\nrounds: 91"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2931.898138251124,
            "unit": "iter/sec",
            "range": "stddev: 0.0010017451881519765",
            "extra": "mean: 341.07596950707836 usec\nrounds: 3673"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693307054,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2529.4465182166223,
            "unit": "iter/sec",
            "range": "stddev: 0.000057835451364895056",
            "extra": "mean: 395.3434052857724 usec\nrounds: 227"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3458.8455463844257,
            "unit": "iter/sec",
            "range": "stddev: 0.0008887846126961201",
            "extra": "mean: 289.1138059186576 usec\nrounds: 4900"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781936637,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2245.2345188219583,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338999508909146",
            "extra": "mean: 445.3877720197734 usec\nrounds: 193"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3000.61411559905,
            "unit": "iter/sec",
            "range": "stddev: 0.0010417363922830096",
            "extra": "mean: 333.2651122319864 usec\nrounds: 4660"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897070257,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2598.3516057439124,
            "unit": "iter/sec",
            "range": "stddev: 0.000009259049301297735",
            "extra": "mean: 384.8593846150003 usec\nrounds: 208"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3550.7767264278727,
            "unit": "iter/sec",
            "range": "stddev: 0.0008480358920960393",
            "extra": "mean: 281.62852160124777 usec\nrounds: 4421"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048450686,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2988.5654420958494,
            "unit": "iter/sec",
            "range": "stddev: 0.000007078373525036657",
            "extra": "mean: 334.60870085505326 usec\nrounds: 234"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3937.9378196371285,
            "unit": "iter/sec",
            "range": "stddev: 0.0008258331021598755",
            "extra": "mean: 253.94001779645868 usec\nrounds: 5001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426647132,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2943.9782912832634,
            "unit": "iter/sec",
            "range": "stddev: 0.000036841756520336165",
            "extra": "mean: 339.67641777823906 usec\nrounds: 225"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3829.077508797562,
            "unit": "iter/sec",
            "range": "stddev: 0.0008564318917290823",
            "extra": "mean: 261.1595084462075 usec\nrounds: 4203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469817111,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2030.8870396418395,
            "unit": "iter/sec",
            "range": "stddev: 0.000050006924962228936",
            "extra": "mean: 492.3956775933518 usec\nrounds: 183"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2561.022851024966,
            "unit": "iter/sec",
            "range": "stddev: 0.0014977226103606391",
            "extra": "mean: 390.4689876545938 usec\nrounds: 4455"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610800978963,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2155.696679777872,
            "unit": "iter/sec",
            "range": "stddev: 0.000060734595927782136",
            "extra": "mean: 463.88715508113245 usec\nrounds: 187"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3019.835769899432,
            "unit": "iter/sec",
            "range": "stddev: 0.0009213308385390698",
            "extra": "mean: 331.14383569054235 usec\nrounds: 3889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290192689,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2189.459959878376,
            "unit": "iter/sec",
            "range": "stddev: 0.00010000577797556266",
            "extra": "mean: 456.7336321855138 usec\nrounds: 174"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3185.364055453585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009341351915203413",
            "extra": "mean: 313.9358586934276 usec\nrounds: 4883"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980714218,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2447.561792947292,
            "unit": "iter/sec",
            "range": "stddev: 0.00000863061154542158",
            "extra": "mean: 408.56986854490214 usec\nrounds: 213"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3464.356512047174,
            "unit": "iter/sec",
            "range": "stddev: 0.0008441400501570091",
            "extra": "mean: 288.65389474857346 usec\nrounds: 4475"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452761120,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1930.4506237629657,
            "unit": "iter/sec",
            "range": "stddev: 0.00004420140033296995",
            "extra": "mean: 518.0137671953152 usec\nrounds: 189"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2693.4303838409373,
            "unit": "iter/sec",
            "range": "stddev: 0.0009998293542680227",
            "extra": "mean: 371.27375038145993 usec\nrounds: 3934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586135393,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2481.201123299581,
            "unit": "iter/sec",
            "range": "stddev: 0.00001643945978604837",
            "extra": "mean: 403.03060909071644 usec\nrounds: 220"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3362.52307300802,
            "unit": "iter/sec",
            "range": "stddev: 0.0009477714093231072",
            "extra": "mean: 297.39572882853935 usec\nrounds: 4381"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218843528,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2542.6330455763477,
            "unit": "iter/sec",
            "range": "stddev: 0.000021295868915206028",
            "extra": "mean: 393.2930871561635 usec\nrounds: 218"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3615.5875551417566,
            "unit": "iter/sec",
            "range": "stddev: 0.0008304441070992492",
            "extra": "mean: 276.58021960438816 usec\nrounds: 4499"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693311374,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2407.814469930604,
            "unit": "iter/sec",
            "range": "stddev: 0.000011447960079929395",
            "extra": "mean: 415.3143909085409 usec\nrounds: 110"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3430.8257832554223,
            "unit": "iter/sec",
            "range": "stddev: 0.000813766569967325",
            "extra": "mean: 291.4750159803001 usec\nrounds: 3692"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781956435,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1602.237978140899,
            "unit": "iter/sec",
            "range": "stddev: 0.0008247863851040433",
            "extra": "mean: 624.1270108703296 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2739.705634139518,
            "unit": "iter/sec",
            "range": "stddev: 0.0009670529990858281",
            "extra": "mean: 365.0027169119861 usec\nrounds: 3264"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897073570,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2346.813046913026,
            "unit": "iter/sec",
            "range": "stddev: 0.00001036095438358031",
            "extra": "mean: 426.10978378332686 usec\nrounds: 111"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3318.8971192816052,
            "unit": "iter/sec",
            "range": "stddev: 0.0008242299646600453",
            "extra": "mean: 301.304910655518 usec\nrounds: 3951"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048463232,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2416.5060416763263,
            "unit": "iter/sec",
            "range": "stddev: 0.00005494004025419348",
            "extra": "mean: 413.82060824739403 usec\nrounds: 97"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3138.976383030393,
            "unit": "iter/sec",
            "range": "stddev: 0.0009591674110380162",
            "extra": "mean: 318.57519075520787 usec\nrounds: 4608"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426667651,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2311.8500271490157,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497934497125418",
            "extra": "mean: 432.55401010298436 usec\nrounds: 99"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3021.984386130198,
            "unit": "iter/sec",
            "range": "stddev: 0.0009826478849573324",
            "extra": "mean: 330.9083940306356 usec\nrounds: 4322"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469804219,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1889.2871086274413,
            "unit": "iter/sec",
            "range": "stddev: 0.00007593011527767194",
            "extra": "mean: 529.3001764705289 usec\nrounds: 85"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2522.6206099611613,
            "unit": "iter/sec",
            "range": "stddev: 0.0011116042537569185",
            "extra": "mean: 396.4131570364821 usec\nrounds: 3617"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610800983530,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1969.54172232059,
            "unit": "iter/sec",
            "range": "stddev: 0.00008455400001611995",
            "extra": "mean: 507.73232608739124 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2864.0212621494315,
            "unit": "iter/sec",
            "range": "stddev: 0.00094892593676268",
            "extra": "mean: 349.1594190364026 usec\nrounds: 4465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290202913,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2110.8745721121295,
            "unit": "iter/sec",
            "range": "stddev: 0.00010398863066874398",
            "extra": "mean: 473.73729032104717 usec\nrounds: 93"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3159.8295443888123,
            "unit": "iter/sec",
            "range": "stddev: 0.0008687113908304197",
            "extra": "mean: 316.4727672654964 usec\nrounds: 3953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980719866,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2356.1827295165667,
            "unit": "iter/sec",
            "range": "stddev: 0.000022875609332845875",
            "extra": "mean: 424.4152999988997 usec\nrounds: 110"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3157.4636257456036,
            "unit": "iter/sec",
            "range": "stddev: 0.0009547627484810171",
            "extra": "mean: 316.70990343201817 usec\nrounds: 4225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452777150,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1587.7653944123683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002370770791306714",
            "extra": "mean: 629.8159687313879 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2556.8574315896662,
            "unit": "iter/sec",
            "range": "stddev: 0.0010113140188035441",
            "extra": "mean: 391.10510724810865 usec\nrounds: 4000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586148407,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2268.5702800036133,
            "unit": "iter/sec",
            "range": "stddev: 0.000021771349886244288",
            "extra": "mean: 440.8062685183407 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2910.650521174125,
            "unit": "iter/sec",
            "range": "stddev: 0.0010331580807136445",
            "extra": "mean: 343.5658086483742 usec\nrounds: 3862"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693321271,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2671.7335657198932,
            "unit": "iter/sec",
            "range": "stddev: 0.00007304444312926738",
            "extra": "mean: 374.28881862722415 usec\nrounds: 204"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3996.0114964549202,
            "unit": "iter/sec",
            "range": "stddev: 0.0008459003831137955",
            "extra": "mean: 250.24953028467377 usec\nrounds: 7413"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781928289,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2766.477349039981,
            "unit": "iter/sec",
            "range": "stddev: 0.00006070482534183757",
            "extra": "mean: 361.4705178580329 usec\nrounds: 224"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4236.0272162982,
            "unit": "iter/sec",
            "range": "stddev: 0.0008167672932883759",
            "extra": "mean: 236.0702490655584 usec\nrounds: 5083"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897059816,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3094.0867009492017,
            "unit": "iter/sec",
            "range": "stddev: 0.000021065194666102193",
            "extra": "mean: 323.1971488365923 usec\nrounds: 215"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4961.469251839216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007209929354272294",
            "extra": "mean: 201.55319911119074 usec\nrounds: 5625"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048456291,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3020.643479366981,
            "unit": "iter/sec",
            "range": "stddev: 0.000015626394566644784",
            "extra": "mean: 331.0552889907962 usec\nrounds: 218"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4315.23376727341,
            "unit": "iter/sec",
            "range": "stddev: 0.0007961901040144872",
            "extra": "mean: 231.73715583706422 usec\nrounds: 5525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426642223,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2837.880531874368,
            "unit": "iter/sec",
            "range": "stddev: 0.000055814538234595685",
            "extra": "mean: 352.37565104247653 usec\nrounds: 192"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4300.596490982088,
            "unit": "iter/sec",
            "range": "stddev: 0.000813404331757782",
            "extra": "mean: 232.52588381562836 usec\nrounds: 6636"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469786061,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2310.677580929937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008730906934667296",
            "extra": "mean: 432.77348958289014 usec\nrounds: 192"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3417.566106706618,
            "unit": "iter/sec",
            "range": "stddev: 0.0009530525357591449",
            "extra": "mean: 292.6058981090677 usec\nrounds: 4760"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610800992500,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3096.754127313181,
            "unit": "iter/sec",
            "range": "stddev: 0.000017805118809567314",
            "extra": "mean: 322.9187590903848 usec\nrounds: 220"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4157.067277588514,
            "unit": "iter/sec",
            "range": "stddev: 0.0008858708873072838",
            "extra": "mean: 240.55420161015365 usec\nrounds: 5838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290185141,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2539.0421140166222,
            "unit": "iter/sec",
            "range": "stddev: 0.00010569053930410775",
            "extra": "mean: 393.8493160391326 usec\nrounds: 212"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3788.396319373675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008863602706995382",
            "extra": "mean: 263.9639350524253 usec\nrounds: 6636"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980712710,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3034.5597337823924,
            "unit": "iter/sec",
            "range": "stddev: 0.000025152601594142235",
            "extra": "mean: 329.53709523903865 usec\nrounds: 231"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4229.2418826710555,
            "unit": "iter/sec",
            "range": "stddev: 0.0008363633690786572",
            "extra": "mean: 236.44899670964944 usec\nrounds: 6382"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452734521,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2983.355644067466,
            "unit": "iter/sec",
            "range": "stddev: 0.000030953513942120497",
            "extra": "mean: 335.1930239991816 usec\nrounds: 250"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4449.691820920581,
            "unit": "iter/sec",
            "range": "stddev: 0.0008355507534971808",
            "extra": "mean: 224.73466483643207 usec\nrounds: 5102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586134723,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2850.4816354939285,
            "unit": "iter/sec",
            "range": "stddev: 0.000010135409044454623",
            "extra": "mean: 350.81790654186096 usec\nrounds: 214"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3792.6428552907455,
            "unit": "iter/sec",
            "range": "stddev: 0.0009630089886422442",
            "extra": "mean: 263.66838063990065 usec\nrounds: 4876"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218850395,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2706.3359690896405,
            "unit": "iter/sec",
            "range": "stddev: 0.000011453478096563143",
            "extra": "mean: 369.50327358520116 usec\nrounds: 212"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3782.5902707920723,
            "unit": "iter/sec",
            "range": "stddev: 0.0008745965430912534",
            "extra": "mean: 264.3691038180036 usec\nrounds: 5317"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608693382592,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 808.3001277614571,
            "unit": "iter/sec",
            "range": "stddev: 0.0001376069082035895",
            "extra": "mean: 1.2371642236027416 msec\nrounds: 161"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3381.015705273286,
            "unit": "iter/sec",
            "range": "stddev: 0.0013748208308483366",
            "extra": "mean: 295.7691082121638 usec\nrounds: 5711"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609781942569,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 847.5989499477673,
            "unit": "iter/sec",
            "range": "stddev: 0.0001323668975453214",
            "extra": "mean: 1.179803254902126 msec\nrounds: 153"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3634.8904282013036,
            "unit": "iter/sec",
            "range": "stddev: 0.001177532446733447",
            "extra": "mean: 275.1114565219073 usec\nrounds: 5152"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609897071986,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 957.7610673891649,
            "unit": "iter/sec",
            "range": "stddev: 0.000014961116881001694",
            "extra": "mean: 1.044101743168552 msec\nrounds: 183"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3824.5377007800316,
            "unit": "iter/sec",
            "range": "stddev: 0.0012487780131649148",
            "extra": "mean: 261.4695103661929 usec\nrounds: 5788"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610048465270,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 952.3319906794069,
            "unit": "iter/sec",
            "range": "stddev: 0.000034814891805002806",
            "extra": "mean: 1.050053983051211 msec\nrounds: 177"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3813.032827199533,
            "unit": "iter/sec",
            "range": "stddev: 0.0013643331857199018",
            "extra": "mean: 262.258429265726 usec\nrounds: 5761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610426661723,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 848.6817320565258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002149888287993184",
            "extra": "mean: 1.1782980147066435 msec\nrounds: 136"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3641.419526277519,
            "unit": "iter/sec",
            "range": "stddev: 0.0011624553522275715",
            "extra": "mean: 274.6181791973475 usec\nrounds: 6105"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610469769327,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 903.8112647786188,
            "unit": "iter/sec",
            "range": "stddev: 0.00013183702964211978",
            "extra": "mean: 1.1064256874967606 msec\nrounds: 144"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3926.203889138042,
            "unit": "iter/sec",
            "range": "stddev: 0.0011481853093133255",
            "extra": "mean: 254.69894794983244 usec\nrounds: 6878"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610801009557,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 952.2203385029549,
            "unit": "iter/sec",
            "range": "stddev: 0.000016664829281264567",
            "extra": "mean: 1.0501771066685706 msec\nrounds: 150"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4038.5994825482157,
            "unit": "iter/sec",
            "range": "stddev: 0.0011066602353300788",
            "extra": "mean: 247.61058983968246 usec\nrounds: 5866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290199675,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 935.6605743154838,
            "unit": "iter/sec",
            "range": "stddev: 0.00019369131450719607",
            "extra": "mean: 1.0687636387068955 msec\nrounds: 155"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3714.955607571982,
            "unit": "iter/sec",
            "range": "stddev: 0.0011441061985767494",
            "extra": "mean: 269.1822206332041 usec\nrounds: 5176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980721603,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 911.5067091191324,
            "unit": "iter/sec",
            "range": "stddev: 0.000014056719157583472",
            "extra": "mean: 1.0970846292139598 msec\nrounds: 178"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3594.607937526706,
            "unit": "iter/sec",
            "range": "stddev: 0.0012994220602679395",
            "extra": "mean: 278.194456079696 usec\nrounds: 5510"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452733970,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1042.0944687010838,
            "unit": "iter/sec",
            "range": "stddev: 0.000010980904923182386",
            "extra": "mean: 959.6058994981978 usec\nrounds: 199"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4148.1791547594485,
            "unit": "iter/sec",
            "range": "stddev: 0.0013249928047788164",
            "extra": "mean: 241.06962662223535 usec\nrounds: 6318"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586135509,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 942.0925604313279,
            "unit": "iter/sec",
            "range": "stddev: 0.000038865723151435375",
            "extra": "mean: 1.0614668260857083 msec\nrounds: 184"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3958.654236169484,
            "unit": "iter/sec",
            "range": "stddev: 0.0011676661903135227",
            "extra": "mean: 252.61109971747135 usec\nrounds: 5666"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290126307,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 72528.3614001806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012571583550871244",
            "extra": "mean: 13.787709810268925 usec\nrounds: 9959"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 148142.1301057092,
            "unit": "iter/sec",
            "range": "stddev: 6.250422074641663e-7",
            "extra": "mean: 6.750274208197452 usec\nrounds: 54940"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980689143,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 95218.10215153886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019619615990911083",
            "extra": "mean: 10.502204700619929 usec\nrounds: 10977"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 206184.11360297704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010486934058235902",
            "extra": "mean: 4.850034188014964 usec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452686449,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 76048.35722567573,
            "unit": "iter/sec",
            "range": "stddev: 0.00000398249179093635",
            "extra": "mean: 13.149527964587989 usec\nrounds: 11014"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 168315.02606282796,
            "unit": "iter/sec",
            "range": "stddev: 0.000003926963068349931",
            "extra": "mean: 5.94124020529649 usec\nrounds: 32364"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586086178,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 63235.70189429143,
            "unit": "iter/sec",
            "range": "stddev: 0.000007708864285746622",
            "extra": "mean: 15.81385151178775 usec\nrounds: 10021"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 150809.78487545403,
            "unit": "iter/sec",
            "range": "stddev: 0.000010377252473318482",
            "extra": "mean: 6.630869481219988 usec\nrounds: 59524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218821851,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 56671.11901068954,
            "unit": "iter/sec",
            "range": "stddev: 0.000024081457449260182",
            "extra": "mean: 17.645672389341314 usec\nrounds: 7048"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 128774.9966411178,
            "unit": "iter/sec",
            "range": "stddev: 0.00000834281087171612",
            "extra": "mean: 7.76548263314573 usec\nrounds: 55249"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290132215,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 50961.85280231019,
            "unit": "iter/sec",
            "range": "stddev: 0.000006414406387094249",
            "extra": "mean: 19.62252047387626 usec\nrounds: 8719"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 133331.18568315083,
            "unit": "iter/sec",
            "range": "stddev: 0.000004319030793353426",
            "extra": "mean: 7.500120807268654 usec\nrounds: 58821"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980692889,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 57904.36770572903,
            "unit": "iter/sec",
            "range": "stddev: 0.000002601129074267037",
            "extra": "mean: 17.26985441032733 usec\nrounds: 7267"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 129530.74083218467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016641052803526632",
            "extra": "mean: 7.720175099558519 usec\nrounds: 63284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452693597,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 62058.207851528154,
            "unit": "iter/sec",
            "range": "stddev: 0.00000301252298188375",
            "extra": "mean: 16.113903939869825 usec\nrounds: 8224"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 137523.4278786824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017231635822983677",
            "extra": "mean: 7.271488323299789 usec\nrounds: 64103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586102909,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 44308.42858054881,
            "unit": "iter/sec",
            "range": "stddev: 0.000004253923412497864",
            "extra": "mean: 22.569069408139544 usec\nrounds: 7247"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 104429.36734669098,
            "unit": "iter/sec",
            "range": "stddev: 0.00001046875544064846",
            "extra": "mean: 9.575850408823593 usec\nrounds: 42556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218830111,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 40962.71446092291,
            "unit": "iter/sec",
            "range": "stddev: 0.00001861652366727046",
            "extra": "mean: 24.412444662425077 usec\nrounds: 6117"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 96941.19607615797,
            "unit": "iter/sec",
            "range": "stddev: 0.000015180468014021364",
            "extra": "mean: 10.315531894349538 usec\nrounds: 10331"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290136679,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 67745.39304369628,
            "unit": "iter/sec",
            "range": "stddev: 0.000008702009528842104",
            "extra": "mean: 14.761151350247426 usec\nrounds: 9217"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 162947.04424720845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051016930079281105",
            "extra": "mean: 6.136963113506318 usec\nrounds: 61350"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980688187,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 95897.86096792053,
            "unit": "iter/sec",
            "range": "stddev: 9.003059736414375e-7",
            "extra": "mean: 10.427761265024639 usec\nrounds: 10719"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 215520.8294011255,
            "unit": "iter/sec",
            "range": "stddev: 2.7033667357920655e-7",
            "extra": "mean: 4.639922752611575 usec\nrounds: 73530"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452688201,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 97781.55595288888,
            "unit": "iter/sec",
            "range": "stddev: 7.491013526254862e-7",
            "extra": "mean: 10.226877556354285 usec\nrounds: 11442"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 218790.67650487556,
            "unit": "iter/sec",
            "range": "stddev: 2.9145047319623805e-7",
            "extra": "mean: 4.570578673528239 usec\nrounds: 72464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586097485,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 72121.90312386141,
            "unit": "iter/sec",
            "range": "stddev: 0.000013617883761145649",
            "extra": "mean: 13.86541337217087 usec\nrounds: 9991"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 170160.93313968062,
            "unit": "iter/sec",
            "range": "stddev: 0.000019892799122856865",
            "extra": "mean: 5.876789587061834 usec\nrounds: 56180"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218818268,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 85018.00299329741,
            "unit": "iter/sec",
            "range": "stddev: 0.000001230805696341891",
            "extra": "mean: 11.76221464621837 usec\nrounds: 9709"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 177474.3926551693,
            "unit": "iter/sec",
            "range": "stddev: 7.192515337082896e-7",
            "extra": "mean: 5.634615704492019 usec\nrounds: 59881"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - propagator": [
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290142819,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 51645.495881588875,
            "unit": "iter/sec",
            "range": "stddev: 0.000013067923049776915",
            "extra": "mean: 19.36277274387621 usec\nrounds: 8211"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 116704.89163906421,
            "unit": "iter/sec",
            "range": "stddev: 0.000009823190667835091",
            "extra": "mean: 8.568621125948361 usec\nrounds: 57143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980695431,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 53502.90744885408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017659040819502126",
            "extra": "mean: 18.690573048874896 usec\nrounds: 8905"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 117805.3560349108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024394092924015437",
            "extra": "mean: 8.488578394548181 usec\nrounds: 52357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452705599,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 51667.24585417608,
            "unit": "iter/sec",
            "range": "stddev: 7.970993200167233e-7",
            "extra": "mean: 19.3546217428033 usec\nrounds: 8251"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 117842.06032069742,
            "unit": "iter/sec",
            "range": "stddev: 0.000002623243673030238",
            "extra": "mean: 8.485934455648371 usec\nrounds: 54055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586084927,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 56188.68058630769,
            "unit": "iter/sec",
            "range": "stddev: 0.000002058970197478781",
            "extra": "mean: 17.7971788902209 usec\nrounds: 9408"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 125552.9054433276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013819947016089093",
            "extra": "mean: 7.964769883014636 usec\nrounds: 58140"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218823650,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 39572.08034230175,
            "unit": "iter/sec",
            "range": "stddev: 0.000013521274609253155",
            "extra": "mean: 25.27034190140922 usec\nrounds: 8131"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 98612.05202153092,
            "unit": "iter/sec",
            "range": "stddev: 0.000006108988867336133",
            "extra": "mean: 10.140748311186755 usec\nrounds: 43669"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290129815,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 71154.71258517023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000377891772252276",
            "extra": "mean: 14.0538829217113 usec\nrounds: 11377"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 159374.4975413004,
            "unit": "iter/sec",
            "range": "stddev: 0.000008753876606482551",
            "extra": "mean: 6.274529585518281 usec\nrounds: 60976"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980703261,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 90935.42117028312,
            "unit": "iter/sec",
            "range": "stddev: 0.000007735753059261858",
            "extra": "mean: 10.996814960887772 usec\nrounds: 11403"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 180636.12596250803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036838402673178036",
            "extra": "mean: 5.5359911793477865 usec\nrounds: 67115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452696404,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 71433.41037376749,
            "unit": "iter/sec",
            "range": "stddev: 0.000012438772163765662",
            "extra": "mean: 13.999051630989051 usec\nrounds: 5365"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 160462.59133890425,
            "unit": "iter/sec",
            "range": "stddev: 0.000010321682578207553",
            "extra": "mean: 6.231982119047017 usec\nrounds: 61350"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586102717,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 95037.43957208518,
            "unit": "iter/sec",
            "range": "stddev: 0.000004718724638112984",
            "extra": "mean: 10.522168994688746 usec\nrounds: 10882"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 192604.8645482123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036089846462188933",
            "extra": "mean: 5.191976860738546 usec\nrounds: 79994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218817062,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 86520.5670632091,
            "unit": "iter/sec",
            "range": "stddev: 6.009318365608073e-7",
            "extra": "mean: 11.557945514497526 usec\nrounds: 9709"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 166234.70756176306,
            "unit": "iter/sec",
            "range": "stddev: 4.10020527468525e-7",
            "extra": "mean: 6.015590935656194 usec\nrounds: 64936"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - propagator": [
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611290184147,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 335225.5383701789,
            "unit": "iter/sec",
            "range": "stddev: 0.000004025634722672127",
            "extra": "mean: 2.9830662808742634 usec\nrounds: 40004"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 698362.1666702473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025997004650473747",
            "extra": "mean: 1.431921784606198 usec\nrounds: 84041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611980749747,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 353356.156292353,
            "unit": "iter/sec",
            "range": "stddev: 0.000004233455916664163",
            "extra": "mean: 2.8300058798824117 usec\nrounds: 50001"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 719800.7192112829,
            "unit": "iter/sec",
            "range": "stddev: 0.000004288309659804832",
            "extra": "mean: 1.3892734104180073 usec\nrounds: 108708"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612452725784,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 482476.323518998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010632288365005379",
            "extra": "mean: 2.0726405654612075 usec\nrounds: 53479"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 944571.6705567682,
            "unit": "iter/sec",
            "range": "stddev: 6.526255953342533e-7",
            "extra": "mean: 1.058680914504402 usec\nrounds: 106395"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59fc285333041f3dc45a1c82563f531711bf63a5",
          "message": "Update README.md (#1574)",
          "timestamp": "2021-02-05T09:08:16-08:00",
          "tree_id": "51cb976f4b4d174229b9917246ebbaec796c5810",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/59fc285333041f3dc45a1c82563f531711bf63a5"
        },
        "date": 1612586146783,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 374440.1123087966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016662933962640572",
            "extra": "mean: 2.6706540435372985 usec\nrounds: 45245"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 679891.4232269939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020749843397331444",
            "extra": "mean: 1.4708230841532577 usec\nrounds: 81961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21007cc0bf10c5e76d85ba5b9f72e0777717797d",
          "message": "Remove sitecustomize path from PYTHONPATH (#1583)",
          "timestamp": "2021-02-12T13:23:45-08:00",
          "tree_id": "bc0205e6f9af40c1edfba3faa9b505683b7cd846",
          "url": "https://github.com/lonewolf3739/opentelemetry-python/commit/21007cc0bf10c5e76d85ba5b9f72e0777717797d"
        },
        "date": 1613218853991,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 388327.361647031,
            "unit": "iter/sec",
            "range": "stddev: 2.723903272919938e-7",
            "extra": "mean: 2.5751468960586354 usec\nrounds: 43477"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 751464.9900069551,
            "unit": "iter/sec",
            "range": "stddev: 1.805141733752633e-7",
            "extra": "mean: 1.3307339840150756 usec\nrounds: 97078"
          }
        ]
      }
    ]
  }
}