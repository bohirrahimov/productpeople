
// Javascript Code implementation for above problem


// QItem for current location and distance
// from source location
class QItem {
	
	constructor(x, y, path)
	{
		this.row = x;
		this.col = y;
		this.path = path;
	}
};

function minDistance(grid, startX, startY, endX, endY)
{
	const source = new QItem(0, 3, [{x:startX, y:startY}]);
    const N = grid[0].length;
    const M = grid.length;
	// To keep track of visited QItems. Marking
	// blocked cells as visited.
	var visited = Array.from(Array(N), ()=>Array(M).fill(0));
	for (var i = 0; i < N; i++) {
		for (var j = 0; j < M; j++)
		{
			if (grid[i][j] == 'X')
				visited[i][j] = true;
			else
				visited[i][j] = false;

		}
	}

	// applying BFS on matrix cells starting from source
	var q = [];
	q.push(source);
	visited[source.row][source.col] = true;
	while (q.length!=0) {
        var p = q.shift();
        

		// Destination found;
		if (p.row == endX && p.col == endY)
			return p.path;

		// moving up
		if (p.row - 1 >= 0 &&
			visited[p.row - 1][p.col] == false) {
			q.push(new QItem(p.row - 1, p.col, [...p.path, {x:p.row - 1, y:p.col}]));
			visited[p.row - 1][p.col] = true;
            
		}

		// moving down
		if (p.row + 1 < N &&
			visited[p.row + 1][p.col] == false) {
			q.push(new QItem(p.row + 1, p.col, [...p.path, {x:p.row + 1, y:p.col}]));
			visited[p.row + 1][p.col] = true;
		}

		// moving left
		if (p.col - 1 >= 0 &&
			visited[p.row][p.col - 1] == false) {
			q.push(new QItem(p.row, p.col - 1, [...p.path, {x:p.row, y:p.col - 1}]));
			visited[p.row][p.col - 1] = true;
		}

		// moving right
		if (p.col + 1 < M &&
			visited[p.row][p.col + 1] == false) {
			q.push(new QItem(p.row, p.col + 1, [...p.path, {x:p.row, y:p.col + 1}]));
			visited[p.row][p.col + 1] = true;
		}
        //moving top-left
        if (p.row - 1 >= 0 && p.col - 1 >= 0 &&
			visited[p.row - 1][p.col - 1] == false) {
			q.push(new QItem(p.row - 1, p.col - 1, [...p.path, {x:p.row - 1, y:p.col - 1}]));
			visited[p.row - 1][p.col - 1] = true;
            
		}
        //moving top-right
        if (p.row - 1 >= 0 && p.col + 1 < M &&
			visited[p.row - 1][p.col + 1] == false) {
			q.push(new QItem(p.row - 1, p.col + 1, [...p.path, {x:p.row - 1, y:p.col + 1}]));
			visited[p.row - 1][p.col + 1] = true;
            
		}
        //moving bottom-left
        if (p.row + 1 < N && p.col - 1 >= 0 &&
			visited[p.row + 1][p.col - 1] == false) {
			q.push(new QItem(p.row + 1, p.col - 1, [...p.path, {x:p.row + 1, y:p.col - 1}]));
			visited[p.row + 1][p.col - 1] = true;
            
		}
        //moving bottom-right
        if (p.row + 1 < N && p.col + 1 < M &&
			visited[p.row + 1][p.col + 1] == false) {
			q.push(new QItem(p.row + 1, p.col + 1, [...p.path, {x:p.row + 1, y:p.col + 1}]));
			visited[p.row + 1][p.col + 1] = true;
            
		}
	}
	return -1;
}

// Driver code
var grid = [ [ '0', '*', '0', 's' ],
					[ '*', '0', '*', '*' ],
					[ '0', '*', '*', '*' ],
					[ 'd', '*', '*', '*' ] ];
console.log(minDistance(grid));

// This code is contributed by rrrtnx.

