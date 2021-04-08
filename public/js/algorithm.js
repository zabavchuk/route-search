class Graph {
    constructor() {
        this.vertices = [];
        this.edgesList = {};
        this.startVertex = '';
        this.endVertex = '';
    }

    setStartVertex(vertex) {
        this.startVertex = vertex;
    }

    setEndVertex(vertex) {
        this.endVertex = vertex;
    }

    addVertex(vertex) {
        this.vertices.push({vertex: vertex, visited: false});
        this.edgesList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.edgesList[vertex1].push({vertex: vertex2, weight: weight});
        this.edgesList[vertex2].push({vertex: vertex1, weight: weight});
    }

    findPath(startVertex, endVertex) {
        let minDistances = {};
        let minBacktrace = {};
        let queue = new Queue();

        minDistances[this.startVertex] = 0;

        this.vertices.forEach(value => {
            if (value.vertex !== this.startVertex) {
                minDistances[value.vertex] = Infinity
            }
            value.visited = false;
        });

        queue.enqueue([this.startVertex, 0]);

        while (!queue.isEmpty()) {

            let shortestStep = queue.dequeue();
            let currentVertex = shortestStep[0];

            this.vertices.find(value => value.vertex === currentVertex).visited = true;

            if (this.edgesList[currentVertex].length > 0) {
                this.edgesList[currentVertex].forEach(neighbor => {
                    if (!this.vertices.find(value => value.vertex === neighbor.vertex).visited) {

                        let distance = minDistances[currentVertex] + neighbor.weight;

                        if (distance < minDistances[neighbor.vertex]) {
                            minDistances[neighbor.vertex] = distance;
                            minBacktrace[neighbor.vertex] = currentVertex;
                            queue.enqueue([neighbor.vertex, distance]);
                        }
                    }
                });
            }
        }
        let path = [this.endVertex];
        let lastStep = this.endVertex;
        let output = '';

        while (lastStep !== this.startVertex) {
            if (minBacktrace[lastStep] !== undefined) {
                path.unshift(minBacktrace[lastStep]);
                lastStep = minBacktrace[lastStep];
            }
            else {
                return ['Найкоротшого шляху не знайдено'];
            }
        }
        for (let vertex of path) {
            if (path[path.length - 1] === vertex) {
                output += vertex;
            }
            else {
                output += vertex + ' –– ';
            }
        }

        return [output, minDistances[this.endVertex]];
    }

    findMaxPath(startVertex, endVertex) {

        let maxDistances = {};
        let maxBacktrace = {};
        let queue = new Queue();

        maxDistances[this.startVertex] = 0;

        this.vertices.forEach(value => {
            if (value.vertex !== this.startVertex) {
                maxDistances[value.vertex] = Infinity
            }
            value.visited = false;
        });
        queue.enqueue([this.startVertex, 0]);

        while (!queue.isEmpty()) {

            let longestStep = queue.rearDequeue();
            let currentVertex = longestStep[0];

            if (this.vertices.find(value => value.vertex === currentVertex).visited)
                continue;

            this.vertices.find(value => value.vertex === currentVertex).visited = true;

            if (this.edgesList[currentVertex].length > 0) {
                this.edgesList[currentVertex].forEach(neighbor => {
                    if (!this.vertices.find(value => value.vertex === neighbor.vertex).visited) {
                        let distance = maxDistances[currentVertex] + neighbor.weight;

                        if (!Number.isFinite(maxDistances[neighbor.vertex])) {
                            maxDistances[neighbor.vertex] = distance;
                            maxBacktrace[neighbor.vertex] = currentVertex;
                            queue.enqueue([neighbor.vertex, distance]);
                        }
                        else if (distance > maxDistances[neighbor.vertex]) {
                            maxDistances[neighbor.vertex] = distance;
                            maxBacktrace[neighbor.vertex] = currentVertex;
                            queue.enqueue([neighbor.vertex, distance]);
                        }
                    }
                });
            }
        }
        let path = [this.endVertex];
        let lastStep = this.endVertex;
        let output = '';

        while (lastStep !== this.startVertex || lastStep === undefined) {
            if (maxBacktrace[lastStep] !== undefined) {
                path.unshift(maxBacktrace[lastStep]);
                lastStep = maxBacktrace[lastStep];
            }
            else {
                return 'Найдовшого шляху не знайдено';
            }
        }
        for (let vertex of path) {
            if (path[path.length - 1] === vertex) {
                output += vertex;
            }
            else {
                output += vertex + ' –– ';
            }
        }
        return [output, maxDistances[this.endVertex]];
    }
}

class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(element) {
        if (this.isEmpty()) {
            this.list.push(element);
        } else {
            let contain = false;

            for (let i = 1; i <= this.list.length; i++) {
                if (element[1] < this.list[i - 1][1]) {
                    this.list.splice(i - 1, 0, element);
                    contain = true;
                    break;
                }
            }
            if (!contain) {
                this.list.push(element);
            }
        }
    };

    dequeue() {
        return this.list.shift();
    };

    rearDequeue() {
        return this.list.pop();
    };

    isEmpty() {
        return (this.list.length === 0)
    };
}