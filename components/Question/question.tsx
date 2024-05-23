import React from 'react'

const Question = () => {
  return (
    <div className='w-full max-h-screen overflow-auto scroll-smooth border text-white font-bold border-white rounded-lg'>
      <div className='w-full min-h-screen p-4'>

        <h1 className='text-left text-3xl font-bold my-4 '>1. Two Sum</h1>

        <p className='text-base font-medium mb-4 leading-relaxed '>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br />
          You may assume that each input would have exactly one solution, and you may not use the same element twice.<br />

          You can return the answer in any order.</p>

        <p><strong className="example">Example 1:</strong></p>

        <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
          <strong>Output:</strong> [0,1] <br />
          <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
        </pre>

        <p><strong className="example">Example 2:</strong></p>

        <pre><strong>Input:</strong> nums = [3,2,4], target = 6
          <strong>Output:</strong> [1,2]
        </pre>

        <p><strong className="example">Example 3:</strong></p>

        <pre><strong>Input:</strong> nums = [3,3], target = 6
          <strong>Output:</strong> [0,1]
        </pre>

        <p>&nbsp;</p>
        <p><strong>Constraints:</strong></p>

        <ul>
          <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
          <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
          <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
          <li><strong>Only one valid answer exists.</strong></li>
        </ul>
        <p className='text-base font-medium mb-4 leading-relaxed '>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br />
          You may assume that each input would have exactly one solution, and you may not use the same element twice.<br />

          You can return the answer in any order.</p>

        <p><strong className="example">Example 1:</strong></p>

        <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
          <strong>Output:</strong> [0,1] <br />
          <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
        </pre>

        <p><strong className="example">Example 2:</strong></p>

        <pre><strong>Input:</strong> nums = [3,2,4], target = 6
          <strong>Output:</strong> [1,2]
        </pre>

        <p><strong className="example">Example 3:</strong></p>

        <pre><strong>Input:</strong> nums = [3,3], target = 6
          <strong>Output:</strong> [0,1]
        </pre>

        <p>&nbsp;</p>
        <p><strong>Constraints:</strong></p>

        <ul>
          <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
          <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
          <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
          <li><strong>Only one valid answer exists.</strong></li>
        </ul>
        <p>&nbsp;</p>
        <strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code>time complexity?

      </div>
    </div>

  )
}

export default Question
